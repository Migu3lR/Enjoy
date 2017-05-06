import firebase from 'firebase';
import Firebase from './Firebase';

const Data = Firebase.database();
const Auth = Firebase.auth();

const api = {
  db: {
    getList() {
      const response = Data.ref('lista');
      response.on('child_added', (snapshot) => {
        console.log(snapshot.key, snapshot.val());
        return snapshot;
      });
    },
  },
  auth: {
    Login_Google() {
      let user = null;
      // Start a sign in process for an unauthenticated user.
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      Auth.signInWithPopup(provider).then((result) => {
        // This gives you a Google Access Token.
        const token = result.credential.accessToken;
        // The signed-in user info.
        user = result.user;
        console.log(user, token);
      });

      return user;
    },
    Login_Email(username, pass) {
      Auth.signInWithEmailAndPassword(username, pass)
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
      Auth.onAuthStateChanged((user) => {
        if (user) {
          console.log(user);
        }
      });
    },
    currentUser() {
      const user = firebase.auth().currentUser;

      if (user) {
        return (user);
      }
      return null;
    },
  },

};

export default api;

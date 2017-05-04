import fetch from 'isomorphic-fetch';
import firebase from 'firebase';
import Firebase from './Firebase';

const Data = Firebase.database();
const Auth = Firebase.auth();

const api = {
  db: {
    getList() {
      const response = Data.ref('lista');
      response.on("child_added", function(snapshot) {
        console.log(snapshot.key, snapshot.val());
        return snapshot;
      });
    },
    async getSingle(id = 1) {
      const response = await fetch(`${baseUrl}/posts/${id}`);
      const data = await response.json();

      return data;
    },
    async getComments(id = 1) {
      const response = await fetch(`${baseUrl}/posts/${id}/comments`);
      const data = await response.json();

      return data;
    },
  },
  auth: {
    Login_Google() {
      let user = null;
      // Start a sign in process for an unauthenticated user.
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      Auth.signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token.
        var token = result.credential.accessToken;
        // The signed-in user info.
        user = result.user;
        console.log(user);
      });

      return user;
    },
    Login_Email(user, pass) {
      Auth.signInWithEmailAndPassword(user, pass)
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
            console.log(error);
        });
      Auth.onAuthStateChanged(user => {
        if(user) {
          console.log(user);
        }
      });
    },
  },

};

export default api;

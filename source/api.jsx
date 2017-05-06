import { notify } from 'react-notify-toast';

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
          if (errorCode === 'auth/wrong-password' || errorCode === 'auth/user-not-found') {
            notify.show(errorCode, 'error', '4000');
          } else {
            notify.show('Ha ocurrido un error inesperado, vuelve a intentarlo', 'error', '4000');
          }
          console.log(errorCode, errorMessage);
        });
    },
    currentUser() {
      const user = Auth.currentUser;
      if (user) {
        return (user);
      }
      return null;
    },
    SuscribeAuthChage() {
      Auth.onAuthStateChanged((user) => {
        if (user) {
          return (user);
        }
        return null;
      });
    },
  },

};

export default api;

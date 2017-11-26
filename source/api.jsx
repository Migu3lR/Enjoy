import { notify } from 'react-notify-toast';

import firebase from 'firebase';
import dateFormat from 'dateformat';
import Rebase from 're-base';

import Firebase from './Firebase';
import sha256 from './CryptoSHA256';

const Data = Firebase.database();
const base = Rebase.createClass(Data);
const Auth = Firebase.auth();

function notifyError(message) {
  notify.show(message, 'error', 5000);
}

function handleAuthErrors(errorCode) {
  console.log(errorCode);
  switch (errorCode) {
    case 'auth/account-exists-with-different-credential':
      notifyError('Lo sentimos, parece que ya existe una cuenta asociada a este correo electrónico.');
      break;
    case 'auth/wrong-password':
    case 'auth/user-not-found':
      notifyError('Usuario y/o contraseña erroneos.');
      break;
    case 'auth/email-already-in-use':
      notifyError('Este correo electrónico ya se encuentra registrado.');
      break;
    case 'auth/invalid-email':
      notifyError('Correo electrónico invalido.');
      break;
    case 'auth/weak-password':
      notifyError('Tu contraseña es demasiado facil, por favor intenta con otra.');
      break;
    default:
      notifyError('Ha ocurrido un error al intentar iniciar sesión.');
      break;
  }
}

function InitializeUser(user) {
  base.fetch(`/usuarios/${user.uid}`, {
    then: (u) => {
      if (Object.keys(u).length === 0) {
        base.fetch('/parametros/cuentas/', {
          then: (params) => {
            const freeDays = params.startFreeDays * 86400;
            const points = params.startPoints;
            const now = Math.trunc((new Date()).getTime() / 1000);

            base.post(`usuarios/${user.uid}`, {
              data: {
                email: user.email,
                displayName: user.displayName,
                firstLogin: true,
                created: now,
                balance: {
                  points,
                  inTrx: 0,
                },
                plan: {
                  lastCat: 'free',
                  timeUp: now + freeDays,
                },
              },
              then: (e) => {
                if (!e) notify.show('Gracias por registrarte.', 'success', 5000);
                else {
                  notify.show('Error al registrarte.', 'success', 5000);
                }
              },
            });
          },
        });
      }
    },
  });
}

const api = {
  base,
  db: {
    getList() {
      const response = Data.ref('lista');
      response.on('child_added', (snapshot) => {
        console.log(snapshot.key, snapshot.val());
        return snapshot;
      });
    },
    bindState: (scope, stateElement, dbLocation, type = 'Array') => {
      const ref = firebase.database().ref().child(dbLocation);
      if (type === 'Array') scope.bindAsArray(ref, stateElement);
      else scope.bindAsObject(ref, stateElement);
    },
    async getOnce(location) {
      const response = await Data.ref(location).once('value').then(a => a.val());
      return response;
    },
    async getOn(location) {
      const response = await Data.ref(location).once('value').then(a => a.val());
      return response;
    },
    nuevaTrx: (Descripcion, Valor, Iva = 0, BaseIva = 0, Moneda = 'COP') => new Promise((resolve) => {
      Auth.onAuthStateChanged((user) => {
        if (user) {
          const transaccion = {
            Fecha: dateFormat(new Date(), 'yyyy-mm-dd HH:MM:ss'),
            FechaUdp: null,
            ClienteID: user.uid,
            ValorTotal: 10000,
            Iva,
            BaseIva,
            Moneda,
            Descripcion,
            Estado: '0',
            EstadoDet: '0',
          };

          const firma = {
            apiKey: null,
            merchantId: null,
            newTrx: Data.ref().child('transacciones').push().key,
            valor: transaccion.ValorTotal,
            moneda: transaccion.Moneda,
          };

          Data.ref('/parametros/seguridad').once('value')
          .then((seguridad) => {
            firma.apiKey = seguridad.val().PUapiKey;
            firma.merchantId = seguridad.val().PUmerchantId;

            const updates = {};
            updates[`/transacciones/${firma.newTrx}`] = transaccion;
            updates[`/usuarios/${transaccion.ClienteID}/transacciones/${firma.newTrx}`] = transaccion;

            Data.ref().update(updates);

            Data.ref(`/transacciones/${firma.newTrx}`)
            .on('child_added', () => {
              resolve({
                api: seguridad.val().PUapi,
                referenceCode: firma.newTrx,
                merchantId: seguridad.val().PUmerchantId,
                accountId: seguridad.val().PUaccountId,
                description: transaccion.Descripcion,
                amount: transaccion.ValorTotal,
                tax: transaccion.Iva,
                taxReturnBase: transaccion.IvaBase,
                currency: transaccion.Moneda,
                signature: sha256(firma),
                buyerEmail: user.email,
                extra1: user.uid,
                algorithmSignature: 'SHA256',
              });
            });
          });
        }
      });
    }),
  },
  auth: {
    Login_oAuth(oauth) {
      Auth.languageCode = 'es';
      // Start a sign in process for an unauthenticated user.
      let provider = null;
      switch (oauth) {
        case 'Google':
          provider = new firebase.auth.GoogleAuthProvider();
          provider.addScope('profile');
          provider.addScope('email');
          break;
        case 'Facebook':
          provider = new firebase.auth.FacebookAuthProvider();
          provider.addScope('public_profile');
          provider.addScope('email');
          break;
        case 'Twitter':
          provider = new firebase.auth.TwitterAuthProvider();
          break;
        default:
          break;
      }

      Auth.signInWithPopup(provider).then((result) => {
        InitializeUser(result.user);
      }).catch((error) => {
        handleAuthErrors(error.code);
      });
    },
    Login_Email(email, pass) {
      Auth.signInWithEmailAndPassword(email, pass)
        .catch((error) => {
          handleAuthErrors(error.code);
        });
    },
    Register_Email(email, pass, displayName, fullName) {
      const createUser = Auth.createUserWithEmailAndPassword(email, pass);

      createUser.then(() => {
        Auth.currentUser.updateProfile({
          displayName: `${displayName}|${fullName}`,
        });
        InitializeUser(Auth.currentUser);
      }).catch((error) => {
        handleAuthErrors(error.code);
      });
    },
    logOut(history) {
      Auth.signOut().then(() => {
        notify.show('Sesión de usuario cerrada.', 'success', 5000);
        history.push('/enjoy/login');
      }, (error) => {
        handleAuthErrors(error.code);
      });
    },
  },
  acct: {
    async lastCategory(uid) {
      const last = await api.db.getOnce(`/usuarios/${uid}/plan/lastCat`);
      return last;
    },
  },

};

export default api;


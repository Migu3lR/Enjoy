import firebase from 'firebase';
import serviceAccount from './EnjoyLife-d535250a0bd1.json';

const fapp = firebase.initializeApp({
  serviceAccount,
  databaseURL: 'https://enjoylife-32afb.firebaseio.com',
});

const db = fapp.database();

export default db;
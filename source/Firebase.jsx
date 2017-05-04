import * as firebase from 'firebase';
import serviceAccount from './EnjoyLife-d535250a0bd1.json';

firebase.initializeApp({
  serviceAccount,
  databaseURL: 'https://enjoylife-32afb.firebaseio.com',
});

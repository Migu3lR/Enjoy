import * as firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBgPTYEOEdRan943EQJ4PjDoIKJLnah0qA',
  authDomain: 'enjoylife-32afb.firebaseapp.com',
  databaseURL: 'https://enjoylife-32afb.firebaseio.com',
  projectId: 'enjoylife-32afb',
  storageBucket: 'enjoylife-32afb.appspot.com',
  messagingSenderId: '153966974380'
});

export default firebaseApp;

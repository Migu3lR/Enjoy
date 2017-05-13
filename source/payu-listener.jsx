import * as firebase from 'firebase';

import express from 'express';
import bodyParser from 'body-parser';

const Firebase = firebase.initializeApp({
  apiKey: 'AIzaSyBgPTYEOEdRan943EQJ4PjDoIKJLnah0qA',
  authDomain: 'enjoylife-32afb.firebaseapp.com',
  databaseURL: 'https://enjoylife-32afb.firebaseio.com',
  projectId: 'enjoylife-32afb',
  storageBucket: 'enjoylife-32afb.appspot.com',
  messagingSenderId: '153966974380',
});



const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const token = Firebase.auth().createCustomToken('alegraEL_Payments', { unlimited: true });

let auth = false;

const acceso = Firebase.auth().signInWithCustomToken(token);

acceso.then(() => {
  auth = true;
});

acceso.catch(() => {
  auth = false;
});


app.post('/payu', (req, res) => {
  const params = req.body;
  console.log(params);
  res.writeHead(200);
  res.end();
});

app.listen(55880);

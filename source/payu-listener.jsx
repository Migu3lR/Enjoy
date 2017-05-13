import express from 'express';
import bodyParser from 'body-parser';
import firebase from 'firebase';
import Firebase from './Firebase';

const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const token = firebase.auth().createCustomToken('alegraEL_Payments', { unlimited: true });

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

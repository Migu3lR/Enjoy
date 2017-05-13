import express from 'express';
import bodyParser from 'body-parser';
import Firebase from './Firebase';

const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

let auth = false;

const acceso = Firebase.auth().signInWithEmailAndPassword('alegraEL_Payments@alegraELPayments.com', 'alegraEL_Payments!"#');

acceso.then(() => {
  auth = true;
  console('Login OK.');
});

acceso.catch(() => {
  console('Login Error.');
  auth = false;
});


app.post('/payu', (req, res) => {
  const params = req.body;
  console.log(params);
  res.writeHead(200);
  res.end();
});

app.listen(55880);

import express from 'express';
import bodyParser from 'body-parser';
import { Data, Auth } from './Services';

const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const token = Auth.createCustomToken('alegraEL_Payments', { unlimited: true });

let auth = false;

const acceso = Auth.signInWithCustomToken(token);

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

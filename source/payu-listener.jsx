import express from 'express';
import bodyParser from 'body-parser';
import dateFormat from 'dateformat';
import Firebase from './Firebase';

const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const Data = Firebase.database();
const Auth = Firebase.auth();

let auth = false;

const acceso = Auth.signInWithEmailAndPassword('alegraEL_Payments@alegraELPayments.com', 'alegraEL_Payments!"#');
acceso.then(() => {
  console.log('Login OK.');
  auth = true;
});

app.post('/payu', (req, res) => {
  const params = req.body;
  console.log(params);

  if (auth) {
    const now = new Date();

    const updates = {};
    updates[`/transacciones/${params.reference_sale}/Estado`] = params.state_pol;
    updates[`/transacciones/${params.reference_sale}/EstadoDet`] = params.response_code_pol;
    updates[`/transacciones/${params.reference_sale}/FechaUdp`] = dateFormat(now, 'yyyy-mm-dd HH:MM:ss');
    updates[`/usuarios/${params.extra1}/transacciones/${params.reference_sale}/Estado`] = params.state_pol;
    updates[`/usuarios/${params.extra1}/transacciones/${params.reference_sale}/EstadoDet`] = params.response_code_pol;
    updates[`/usuarios/${params.extra1}/transacciones/${params.reference_sale}/FechaUdp`] = dateFormat(now, 'yyyy-mm-dd HH:MM:ss');

    Data.ref().update(updates);

    Data.ref(`/transacciones/${params.reference_sale}`)
    .once('child_changed', () => {
      res.writeHead(200);
      res.end();
    });
  } else {
    res.writeHead(400);
    res.end();
  }
});

app.listen(55880);

import express from 'express';
import bodyParser from 'body-parser';
import Firebase from './Firebase';

const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const Data = Firebase.database();
const Auth = Firebase.auth();

const acceso = Auth.signInWithEmailAndPassword('alegraEL_Payments@alegraELPayments.com', 'alegraEL_Payments!"#');

app.post('/payu', (req, res) => {
  const params = req.body;
  console.log(params);

  acceso.then(() => {
    console.log('Login OK.');
    
    const updates = {};
    updates[`/transacciones/${params.reference_sale}/Estado`] = params.state_pol;
    updates[`/transacciones/${params.reference_sale}/EstadoDet`] = params.response_code_pol;
    updates[`/usuarios/${params.extra1}/transacciones/${params.reference_sale}/Estado`] = params.state_pol;
    updates[`/usuarios/${params.extra1}/transacciones/${params.reference_sale}/EstadoDet`] = params.response_code_pol;

    Data.ref().update(updates);

    Data.ref(`/transacciones/${params.reference_sale}`)
    .on('child_changed', () => {
      res.writeHead(200);
      res.end();
    });
  });

  acceso.catch(() => {
    console.log('Login Error.');
    res.writeHead(400);
    res.end();
  });
});

app.listen(55880);

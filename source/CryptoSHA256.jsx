import crypto from 'crypto';

const sha256 = (txt) => {
  const sign = `${txt.apiKey}~${txt.merchantId}~${txt.newTrx}~${txt.valor}~${txt.moneda}`;
  return crypto.createHash('sha256').update(sign).digest('hex');
};

export default sha256;

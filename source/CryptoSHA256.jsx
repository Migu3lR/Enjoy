import crypto from 'crypto';

const sha256 = txt => crypto.createHash('sha256').update(txt).digest('hex');

export default sha256;

function encrypts (crypto, algorithm, secret, iv, text) {
  let cipher = crypto.createCipheriv(algorithm, Buffer.from(secret), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return encrypted.toString('hex');
};
    
module.exports = encrypts;
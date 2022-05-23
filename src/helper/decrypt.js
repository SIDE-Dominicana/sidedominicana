function decrypts (crypto, algorithm, secretKey, iv, encrypted) {      
  let encryptedText = Buffer.from(encrypted, 'hex');
  let decipher = crypto.createDecipheriv(algorithm, Buffer.from(secretKey), iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
};
  
module.exports = decrypts;
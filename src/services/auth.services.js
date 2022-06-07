const db = require('../config/db.config');
const config = require('../config/app.config');
const crypto = require('crypto');
const secret = config.JWT_SECRETKEY;
const iv = Buffer.from(config.JWT_IV, 'hex');
const algorithm = "aes-256-cbc"; 
const decrypts = require('../helper/decrypt');

async function _verifiedUsername(username) {
    const User = await db.subscribers.findOne({ 
            where: { 
            userName: username
        } 
    });

    return User;
}

async function _comparedPassword(subscriberId, password) {
    let Password = await db.subscribers.findByPk(subscriberId, { attributes: ['passwordHash'] })
    let UserPassword = JSON.parse(JSON.stringify(Password));
    let decryptPassword = decrypts(crypto, algorithm, secret, iv, UserPassword.passwordHash);
    
    if (decryptPassword == password)
        return true;

    return false
}

function _resetPassword() {
    return 'Reset Password Sucessful...'
}

module.exports = {
    _verifiedUsername,
    _comparedPassword,
    _resetPassword
};
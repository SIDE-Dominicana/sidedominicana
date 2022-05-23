const db = require('../config/db.config');
const config = require('../../config.json');
const crypto = require('crypto');
const secret = config.JWT.SECRETKEY;
const iv = Buffer.from(config.JWT.IV, 'hex');
const algorithm = "aes-256-cbc"; 
const encrypts = require('../helper/encrypt');

async function _getAll() {
    const allSubscribers = await db.subscribers.findAll();
    
    return allSubscribers;
}

async function _getById(id) {
    const Subscriber = await db.subscribers.findByPk(id);

    return Subscriber;
}

async function _create(subscriber) {    
    
    let password = subscriber.passwordHash.toString();
    let encryptPassword = encrypts(crypto, algorithm, secret, iv, password);    

    // var decryptPassword = decrypts(crypto, algorithm, secret, iv, encryptPassword);
    // console.log(decryptPassword)

    const createSubscriber = await db.subscribers.create({
        userName: subscriber.userName,
        email: subscriber.email,
        passwordHash: encryptPassword,
        firstName: subscriber.firstName,
        lastName: subscriber.lastName,
        role: subscriber.role,
        status: subscriber.status
    });

    return createSubscriber; 
}

async function _update(id, subscriber) {
    let secret = crypto.randomBytes(32);
    let iv = crypto.randomBytes(16);
    let password = subscriber.passwordHash.toString();
    var encryptPassword = encrypts(crypto, algorithm, secret, iv, password);

    const updateSubscriber =  await db.subscribers.update({
        userName: subscriber.userName,
        email: subscriber.email,
        passwordHash: encryptPassword,
        firstName: subscriber.firstName,
        lastName: subscriber.lastName,
        role: subscriber.role,
        status: subscriber.status
    },
    {
        where: {
            subscriberId: id
        }
    });

    return updateSubscriber;
}

async function _delete(id) {
    const deleteSubscriber = await db.subscribers.destroy({
        where: {
            subscriberId: id
        }
    });
    
    return deleteSubscriber;
}

module.exports = {
    _getAll,
    _getById,
    _create,
    _update,
    _delete
}
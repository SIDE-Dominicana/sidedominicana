const variables = require('../../config.json');
const config = variables.DATABASE.DEVELOPMENT;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(config.DATABASE, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.DIALECT,
  operatorsAliases: false,
  pool: {
    max: config.POOL.MAX,
    min: config.POOL.MIN,
    acquire: config.POOL.ACQUIRE,
    idle: config.POOL.IDLE
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.subscribers = require("../model/subscribers.model")(sequelize, Sequelize);
module.exports = db;
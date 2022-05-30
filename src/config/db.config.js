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

/* Connection set of db instances */

let Subscribers = db.subscribers = require("../model/subscribers.model")(sequelize, Sequelize),
    Systems = db.systems = require("../model/systems.model")(sequelize, Sequelize),
    Roles = db.roles = require("../model/roles.model")(sequelize, Sequelize),
    Plans = db.plans = require("../model/plans.model")(sequelize, Sequelize),
    Permissions = db.permissions = require("../model/permissions.model")(sequelize, Sequelize),
    Payments = db.payments = require("../model/payments.model")(sequelize, Sequelize),
    Companies = db.companies = require("../model/companies.model")(sequelize, Sequelize),
    Business = db.business = require("../model/businessTypes.model")(sequelize, Sequelize),
    Addresses = db.addresses = require("../model/addresses.model")(sequelize, Sequelize),
    UserTypes = db.users = require("../model/userTypes.model")(sequelize, Sequelize),
    TransactionLog = db.transactions = require("../model/transactions.model")(sequelize, Sequelize),

    Dictionary = db.dictionary = require("../model/dictionary.model")(sequelize, Sequelize),
    Customers = db.customers = require("../model/customers.model")(sequelize, Sequelize),
    Providers = db.providers = require("../model/providers.model")(sequelize, Sequelize),
    Inventories = db.inventories = require("../model/inventories.model")(sequelize, Sequelize),
    Invoices = db.invoices = require("../model/invoices.model")(sequelize, Sequelize);

/* Creation of relationships between models */

/************************************************ Systems database relationships ************************************************/
Systems.hasMany(Subscribers, { foreignKey: 'systemId' });
Systems.hasMany(Payments, { foreignKey: 'systemId'});
Systems.hasMany(Customers, { foreignKey: 'systemId'});
Systems.hasMany(Providers, { foreignKey: 'systemId'});
Systems.hasMany(Inventories, { foreignKey: 'systemId'});
Systems.hasMany(Invoices, { foreignKey: 'systemId'});

/************************************************ Plans database relationships ************************************************/
Plans.hasOne(Systems, { foreignKey: 'planId' });

/************************************************ Roles database relationships ************************************************/
Roles.hasMany(Subscribers, { foreignKey: 'rolId' });

/************************************************ Permissions database relationships ************************************************/
Permissions.hasMany(Roles, { foreignKey: 'permissionId' });

/************************************************ User Types database relationships ************************************************/
UserTypes.hasMany(Subscribers, { foreignKey: 'userTypeId' }); 

/************************************************ Addresses database relationships ************************************************/
Addresses.hasOne(Companies, { foreignKey: 'addressId' });

/************************************************ Business Types database relationships ************************************************/
Business.hasMany(Companies, { foreignKey: 'businessTypeId' });

/************************************************ Companies database relationships ************************************************/
Companies.hasMany(Payments, { foreignKey: 'companyId' });

module.exports = db;
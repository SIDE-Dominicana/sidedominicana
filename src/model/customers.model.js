const { DataTypes } = require('sequelize');

function model(sequelize) {
    const attributes = {
        customerId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true }
    };

    return sequelize.define('Customers', attributes);
}

module.exports = model;
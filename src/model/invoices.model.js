const { DataTypes } = require('sequelize');

function model(sequelize) {
    const attributes = {
        invoiceId: { type : DataTypes.INTEGER, autoIncrement: true, primaryKey: true }
    };

    return sequelize.define('Invoices', attributes);
}

module.exports = model;
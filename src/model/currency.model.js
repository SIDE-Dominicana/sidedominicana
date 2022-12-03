const { DataTypes } = require('sequelize');

function model(sequelize) {
    const attributes = {
        currencyId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true }
    };

    return sequelize.define('Currency', attributes);
}

module.exports = model;
const { DataTypes } = require('sequelize');

function model(sequelize) {
    const attributes = {
        providerId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true }
    };

    return sequelize.define('Providers', attributes);
}

module.exports = model;
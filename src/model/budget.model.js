const { DataTypes } = require('sequelize');

function model(sequelize) {
    const attributes = {
        budgetyId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true }
    };

    return sequelize.define('Budget', attributes);
}

module.exports = model;
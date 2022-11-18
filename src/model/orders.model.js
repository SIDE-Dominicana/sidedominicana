const { DataTypes } = require('sequelize');

function model(sequelize) {
    const attributes = {
        orderId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true }
    };

    return sequelize.define('Orders', attributes);
}

module.exports = model;
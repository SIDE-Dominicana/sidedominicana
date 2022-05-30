const { DataTypes } = require('sequelize');

function model(sequelize) {
    const attributes = {
        inventoryId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true }
    };

    return sequelize.define('Inventories', attributes);
}

module.exports = model;
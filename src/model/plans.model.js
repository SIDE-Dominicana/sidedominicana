const { DataTypes } = require('sequelize');

function model(sequelize) {
    const attributes = {
        planId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false },
        price: { type: DataTypes.INTEGER, allowNull: false },
        quantityUsers: { type: DataTypes.INTEGER }
    };

    return sequelize.define('Plans', attributes);
}

module.exports = model;
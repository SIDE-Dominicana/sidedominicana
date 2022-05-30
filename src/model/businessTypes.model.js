const { DataTypes } = require('sequelize');

function model(sequelize) {
    const attributes = {
        businessTypeId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
    };

    return sequelize.define('BusinessTypes', attributes);
}

module.exports = model;
const { DataTypes } = require('sequelize');

function model(sequelize) {
    const attributes = {
        userTypeId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false }
    };

    return sequelize.define('UserTypes', attributes);
}

module.exports = model;
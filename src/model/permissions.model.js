const { DataTypes } = require('sequelize');

function model(sequelize) {
    const attributes = {
        permissionId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        action: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false }
    };

    return sequelize.define('Permissions', attributes);
}

module.exports = model;
const { DataTypes } = require('sequelize');

function model(sequelize) {
    const attributes = {
        companyId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        reason: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false },
        phone: { type: DataTypes.STRING, allowNull: false }
    };
    
    return sequelize.define('Companies', attributes);
}

module.exports = model;
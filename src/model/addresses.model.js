const { DataTypes } = require('sequelize');

function model(sequelize) {
    const attributes = {
        addressId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        line1: { type: DataTypes.STRING, allowNull: false },
        line2: { type: DataTypes.STRING, allowNull: false },
        country: { type: DataTypes.STRING, allowNull: false },
        city: { type: DataTypes.STRING, allowNull: false },
        state: { type: DataTypes.STRING, allowNull: false },
        zip: { type: DataTypes.STRING, allowNull: false }        
    };

    return sequelize.define('Addresses', attributes);
}

module.exports = model;
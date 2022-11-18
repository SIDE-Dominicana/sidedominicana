const { DataTypes } = require('sequelize');

function model(sequelize) {
    const attributes = {
        productsId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false },
        price: { type: DataTypes.INTEGER, allowNull: false },
        creationDate: { type: DataTypes.DATE, allowNull: false },
        UpdateDate: { type: DataTypes.DATE, allowNull: false },
        status: { type: DataTypes.BOOLEAN, allowNull: false }
    };

    return sequelize.define('Products', attributes);
}

module.exports = model;
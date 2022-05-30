const { DataTypes } = require('sequelize');

function model(sequelize) {
    const attributes = {
        paymentId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        amount: { type: DataTypes.INTEGER, allowNull: false },
        invoiceNumber: { type: DataTypes.INTEGER, allowNull: false },
        paymentMethod: { type: DataTypes.STRING, allowNull: false },
        emissionDate: { type: DataTypes.DATE, allowNull: false }
    };

    return sequelize.define('Payments', attributes);
}

module.exports = model;
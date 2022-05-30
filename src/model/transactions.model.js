const { DataTypes } = require('sequelize');

function model(sequelize) {
    const attributes = {
        transactionId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        action: { type: DataTypes.STRING, allowNull: false },
        module: { type: DataTypes.STRING, allowNull: false },
        executionDate: { type: DataTypes.DATE, allowNull: false },
        executionTime: { type: DataTypes.TIME, allowNull: false },
        isError: { type: DataTypes.BOOLEAN, allowNull: false }
    };

    return sequelize.define('TransactionLog', attributes);
}

module.exports = model;
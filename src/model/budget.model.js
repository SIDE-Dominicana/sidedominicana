const { DataTypes } = require('sequelize');

function model(sequelize) {
    const attributes = {
        budgetyId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        idpartner : { type: DataTypes.INTEGER, allowNull: false },
        investment: { type: DataTypes.INTEGER, allowNull: false },
        income: { type: DataTypes.INTEGER, allowNull: false },
        bills: { type: DataTypes.INTEGER, allowNull: false },
        difference: { type: DataTypes.INTEGER, allowNull: false },
        creationDate: { type: DataTypes.DATE, allowNull: false },
        updateDate: { type: DataTypes.DATE, allowNull: false },
        dateIncial : { type: DataTypes.DATE, allowNull: false },
        dateFinal  : { type: DataTypes.DATE, allowNull: false },
        status: { type: DataTypes.BOOLEAN, allowNull: false }
        
        
    };

    return sequelize.define('Budget', attributes);
}

module.exports = model;
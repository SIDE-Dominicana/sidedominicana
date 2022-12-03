const { DataTypes } = require('sequelize');

function model(sequelize) {
    const attributes = {
        offerId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        creationDate: { type: DataTypes.DATE, allowNull: false },
        UpdateDate: { type: DataTypes.DATE, allowNull: false },
        status: { type: DataTypes.BOOLEAN, allowNull: false },
        userCreate : { type: DataTypes.STRING, allowNull: false },
        UserUpdate :  { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false },
        comment: { type: DataTypes.STRING, allowNull: false },
        price: { type: DataTypes.INTEGER, allowNull: false },
        begoffersdate : { type: DataTypes.DATE, allowNull: false },
        endoffersdate : { type: DataTypes.DATE, allowNull: false },
        status: { type: DataTypes.BOOLEAN, allowNull: false }
       
    };

    return sequelize.define('Offertespecial', attributes);
}

module.exports = model;
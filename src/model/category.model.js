const { DataTypes } = require('sequelize');

function model(sequelize) {
    const attributes = {
        categoryId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
         name: { type: DataTypes.STRING, allowNull: false },
         description: { type: DataTypes.STRING, allowNull: false },
         creationDate: { type: DataTypes.DATE, allowNull: false },
         updateDate: { type: DataTypes.DATE, allowNull: false },
         status: { type: DataTypes.BOOLEAN, allowNull: false }
    };

    return sequelize.define('Category', attributes);
}

module.exports = model;
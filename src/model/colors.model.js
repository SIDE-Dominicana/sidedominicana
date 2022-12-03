const { DataTypes } = require('sequelize');

function model(sequelize) {
    const attributes = {
        colorId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false },
        status: { type: DataTypes.BOOLEAN, allowNull: false}

    };

    return sequelize.define('Colors', attributes);
}

module.exports = model;
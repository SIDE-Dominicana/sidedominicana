const { DataTypes } = require('sequelize');

function model(sequelize) {
    const attributes = {
        colorId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true }
    };

    return sequelize.define('Colors', attributes);
}

module.exports = model;
const { DataTypes } = require('sequelize');

function model(sequelize) {
    const attributes = {
        dictionaryId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true }
    };

    return sequelize.define('Dictionary', attributes);
}

module.exports = model;
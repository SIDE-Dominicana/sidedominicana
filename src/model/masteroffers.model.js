const { DataTypes } = require('sequelize');

function model(sequelize) {
    const attributes = {
        masterofferId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true }
    };

    return sequelize.define('Masteroffers', attributes);
}

module.exports = model;
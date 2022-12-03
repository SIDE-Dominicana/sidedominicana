const { DataTypes } = require('sequelize');

function model(sequelize) {
    const attributes = {
        notificationlogId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true }
    };

    return sequelize.define('Notificationlog', attributes);
}

module.exports = model;
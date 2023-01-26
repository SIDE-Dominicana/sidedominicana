const { DataTypes } = require('sequelize');

function model(sequelize) {
    const attributes = {
        notificationyId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true }
    };

    return sequelize.define('Notificationapp', attributes);
}

module.exports = model;
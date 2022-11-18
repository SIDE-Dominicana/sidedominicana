const { DataTypes } = require('sequelize');

function model(sequelize) {
    const attributes = {
        notificationyId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true }
    };

    return sequelize.define('Notification', attributes);
}

module.exports = model;
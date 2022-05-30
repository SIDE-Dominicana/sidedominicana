const { DataTypes } = require('sequelize');

function model(sequelize) {
    const attributes = {
        subscriberId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        firstName: { type: DataTypes.STRING, allowNull: false },
        lastName: { type: DataTypes.STRING, allowNull: false },
        userName: { type: DataTypes.STRING, allowNull: false, unique: true },
        email: { type: DataTypes.STRING, allowNull: false, unique: true },
        password: { type: DataTypes.STRING, allowNull: false },
        position: { type: DataTypes.STRING, allowNull: false },
        status: { type: DataTypes.BOOLEAN },
        subscriptionDate: { type: DataTypes.DATE, allowNull: false }
    };

    const options = {
        defaultScope: {
            // exclude password hash by default
            attributes: { exclude: ['password'] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {} }
        }
    };

    return sequelize.define('Subscribers', attributes, options);
}

module.exports = model;
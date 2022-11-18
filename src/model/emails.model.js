const { DataTypes } = require('sequelize');

function model(sequelize) {
    const attributes = {
        emailsId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
        idUsers :{ type: DataTypes.INTEGER, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false },
        email2: { type: DataTypes.STRING, allowNull: false },
        status: { type: DataTypes.BOOLEAN, allowNull: false}

        
    };

    return sequelize.define('Emails', attributes);
}

module.exports = model;
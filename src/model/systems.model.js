const { DataTypes } = require('sequelize');

function model(sequelize) {
    const attributes = {
        systemId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false },
        creationDate: { type: DataTypes.DATE, allowNull: false },
        UpdateDate: { type: DataTypes.DATE, allowNull: false },
        status: { type: DataTypes.BOOLEAN, allowNull: false }
    };

    return sequelize.define('Systems', attributes);
}

module.exports = model;
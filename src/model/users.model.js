const { DataTypes } = require('sequelize');
/*
Type of users.
- Clientes.
- Socios.
*/
function model(sequelize) {
    const attributes = {
        usersId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        idUsers :{ type: DataTypes.INTEGER, allowNull: false },
        status: { type: DataTypes.BOOLEAN, allowNull: false}

        
    };

    return sequelize.define('Users', attributes);
}

module.exports = model;
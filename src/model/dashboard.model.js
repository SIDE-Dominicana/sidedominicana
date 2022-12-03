const { DataTypes } = require('sequelize');
/*
  Elaborara el dashboard con los calculos correspondiente que se encuentran en la base de datos. 
  La idea es que no se creen variables para asignar al aire sino que se utilice el modelo para mostrar por pantalla en el 
  dashboard. 
  
*/ 
function model(sequelize) {
    const attributes = {
        boardyId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        countProducts: { type: DataTypes.INTEGER, allowNull: false },
        counstClients: { type: DataTypes.INTEGER, allowNull: false },
        countInvoices: { type: DataTypes.INTEGER, allowNull: false },
        amount_Ped: { type: DataTypes.INTEGER, allowNull: false },
        amount_Peg: { type: DataTypes.INTEGER, allowNull: false },
    };

    return sequelize.define('Dashboard', attributes);
}

module.exports = model;
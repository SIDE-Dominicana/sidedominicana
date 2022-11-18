const { DataTypes } = require('sequelize');
/*
  Elaborara el dashboard con los calculos correspondiente que se encuentran en la base de datos. 
  La idea es que no se creen variables para asignar al aire sino que se utilice el modelo para mostrar por pantalla en el 
  dashboard. 
  
*/ 
function model(sequelize) {
    const attributes = {
        subcategoryId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false },
        creationDate: { type: DataTypes.DATE, allowNull: false },
        updateDate: { type: DataTypes.DATE, allowNull: false },
        status: { type: DataTypes.BOOLEAN, allowNull: false }
    };

    return sequelize.define('SubCategory', attributes);
}

module.exports = model;
const { DataTypes } = require('sequelize');

function model(sequelize) {
    const attributes = {
        blogId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        title: { type: DataTypes.STRING(150) },
        body: { type: DataTypes.STRING },
        author: { type: DataTypes.STRING(50) },
        image: { type: DataTypes.INTEGER },
        publishDate: { type: DataTypes.DATE }   
    };

    return sequelize.define('Blog', attributes);
}

module.exports = model;
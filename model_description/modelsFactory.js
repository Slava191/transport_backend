const { DataTypes } = require('sequelize');

const sequelizeDefineAdapter = require('./sequelizeDefineAdapter')

module.exports = (sequelize, model) => {
	sequelize.define(model.modelName, {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        user_id:{
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        ...sequelizeDefineAdapter(model, DataTypes)
	});
};
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('ATS', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        user_id:{
            type: DataTypes.INTEGER,
        },
        hodovye_kachestva_id:{
            type: DataTypes.INTEGER,
        },
        gabarity_id: {
            type: DataTypes.INTEGER,
        },
        harakteristiki_dvigatelya_id: {
            type: DataTypes.INTEGER,
        },
        massa_id: {
            type: DataTypes.INTEGER,
        },
        Marka_model: {
            type: DataTypes.STRING,
        },
	});
};
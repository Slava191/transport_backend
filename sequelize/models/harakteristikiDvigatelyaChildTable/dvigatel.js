const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('dvigatel', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        user_id:{
            type: DataTypes.INTEGER,
        },
        cilindri_id:{
            type: DataTypes.INTEGER,
        },
        Dvigatel: {
            type: DataTypes.STRING,
        },
        Rabochij_obyom_dvigatelya: {
            type: DataTypes.INTEGER,
        },
        Moshchnost: {
            type: DataTypes.INTEGER,
        },
        Krutyashch_moment: {
            type: DataTypes.INTEGER,
        },
	});
};
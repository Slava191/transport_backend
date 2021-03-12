const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('harakteristiki_dvigatelya', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        user_id:{
            type: DataTypes.INTEGER,
        },
        Dvigatel: {
            type: DataTypes.STRING,
        },
        Raspolozhenie_i_chislo_cilindrov: {
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
        Raskhod_topliva: {
            type: DataTypes.INTEGER,
        },
        Primechaniya: {
            type: DataTypes.STRING,
        },
	});
};
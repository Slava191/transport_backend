const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('transmissiya_i_kolyosa', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        user_id:{
            type: DataTypes.INTEGER,
        },
        Kolyosnaya_baza: {
            type: DataTypes.INTEGER,
        },
        Tip_shin: {
            type: DataTypes.STRING,
        },
        Kolyosnaya_formula: {
            type: DataTypes.STRING,
        },
        Chislo_osej_kolyos: {
            type: DataTypes.INTEGER,
        },
        Korobka_peredach: {
            type: DataTypes.STRING,
        },
        Primechaniya: {
            type: DataTypes.STRING,
        },
	});
};
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('gabarity', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        user_id:{
            type: DataTypes.INTEGER,
        },
        Gabaritnye_razmery_dlina: {
            type: DataTypes.INTEGER,
        },
        Gabaritnye_razmery_shirina: {
            type: DataTypes.INTEGER,
        },
        Gabaritnye_razmery_vysota: {
            type: DataTypes.INTEGER,
        },
        Vysota_shassi_v_zavisimosti_ot_konstrukcii: {
            type: DataTypes.STRING,
        },
        Baza: {
            type: DataTypes.INTEGER,
        },
        Pogruzochnaya_vysota: {
            type: DataTypes.INTEGER,
        },
        Primechaniya: {
            type: DataTypes.STRING,
        },
	});
};
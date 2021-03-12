const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('hodovye_kachestva', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        user_id:{
            type: DataTypes.INTEGER,
        },
        Radius_povorota: {
            type: DataTypes.INTEGER,
        },
        Maksimalno_preodolevaemyj_podyom: {
            type: DataTypes.INTEGER,
        },
        Koleya: {
            type: DataTypes.INTEGER,
        },
        Maks_skorost: {
            type: DataTypes.INTEGER,
        },
        Primechaniya: {
            type: DataTypes.STRING,
        },
	});
};
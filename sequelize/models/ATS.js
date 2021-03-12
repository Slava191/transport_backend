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
        informaciya_o_tekhnicheskih_uzlah_i_agregatah_id: {
            type: DataTypes.INTEGER,
        },
        massa_id: {
            type: DataTypes.INTEGER,
        },
        transmissiya_i_kolyosa_id: {
            type: DataTypes.INTEGER,
        },
        Marka_model: {
            type: DataTypes.STRING,
        },
        Tip_ATS: {
            type: DataTypes.STRING,
        },
        Kabina: {
            type: DataTypes.STRING,
        },
        Klass: {
            type: DataTypes.STRING,
        },
        Primechaniya: {
            type: DataTypes.STRING,
        },
	});
};
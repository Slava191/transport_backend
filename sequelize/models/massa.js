const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('massa', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        user_id:{
            type: DataTypes.INTEGER,
        },
        Snaryazhyonnaya_massa_perednyaya_os:{
            type: DataTypes.INTEGER
        },
        Snaryazhyonnaya_massa_zadnyaya_os:{
            type: DataTypes.INTEGER
        },
        Polnaya_massa_perednyaya_os:{
            type: DataTypes.INTEGER
        },
        Polnaya_massa_zadnyaya_os:{
            type: DataTypes.INTEGER
        }
        // Dopustimaya_polnaya_massa_avtomobilya: {
        //     type: DataTypes.INTEGER,
        // },
        // Dopustimaya_polnaya_massa_avtopoezda: {
        //     type: DataTypes.INTEGER,
        // },
        // Gruzopoyomnost_nagruzka_na_SSU: {
        //     type: DataTypes.INTEGER,
        // },
        // Raspredelenie_nagruzki_na_dorogu_snaryazhyonnaya_massa_perednyaya_os: {
        //     type: DataTypes.INTEGER,
        // },
        // Raspredelenie_nagruzki_na_dorogu_snaryazhyonnaya_massa_zadnyaya_os: {
        //     type: DataTypes.INTEGER,
        // },
        // Raspredelenie_nagruzki_na_dorogu_polnaya_massa_perednyaya_os: {
        //     type: DataTypes.INTEGER,
        // },
        // Raspredelenie_nagruzki_na_dorogu_polnaya_massa_zadnyaya_os: {
        //     type: DataTypes.INTEGER,
        // },
        // Dopustimaya_polnaya_massa: {
        //     type: DataTypes.INTEGER,
        // },
        // Polnaya_massa_na_SSU: {
        //     type: DataTypes.INTEGER,
        // },
        // Polnaya_massa_na_telezhku: {
        //     type: DataTypes.INTEGER,
        // },
        // Massa_v_snaryazhennom_sostoyanii: {
        //     type: DataTypes.INTEGER,
        // },
        // Primechaniya: {
        //     type: DataTypes.STRING,
        // },
	});
};
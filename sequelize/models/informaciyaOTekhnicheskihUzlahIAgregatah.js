const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('informaciya_o_tekhnicheskih_uzlah_i_agregatah', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        user_id:{
            type: DataTypes.INTEGER,
        },
        Bortovoe_napryazhenie: {
            type: DataTypes.INTEGER,
        },
        Obyom_toplivnyh_bakov: {
            type: DataTypes.INTEGER,
        },
        Markirovka_zadnih_mostov: {
            type: DataTypes.STRING,
        },
        Varianty_dop_osevyh_nagruzok: {
            type: DataTypes.STRING,
        },
        Primechaniya: {
            type: DataTypes.STRING,
        },
	});
};
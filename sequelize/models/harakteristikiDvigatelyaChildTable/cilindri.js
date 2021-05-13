const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('cilindri', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        user_id:{
            type: DataTypes.INTEGER,
        },
        Raspolozhenie_i_chislo_cilindrov: {
            type: DataTypes.STRING,
        },
	});
};
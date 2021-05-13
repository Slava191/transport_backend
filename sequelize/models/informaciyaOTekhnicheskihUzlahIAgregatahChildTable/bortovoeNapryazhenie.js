const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('bortovoe_napryazhenie', {
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
	});
};
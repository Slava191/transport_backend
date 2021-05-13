const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('kabina', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        user_id:{
            type: DataTypes.INTEGER,
        },
        Kabina:{
            type: DataTypes.STRING
        }
	});
};
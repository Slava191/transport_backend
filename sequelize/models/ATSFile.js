const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('ATSFile', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        user_id:{
            type: DataTypes.INTEGER,
        },
        ATS_id:{
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING,
        }
	});
};
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
        Marka_model: {
            type: DataTypes.STRING,
        },
        Three_d_model_link: {
            type: DataTypes.STRING,
        }
	});
};
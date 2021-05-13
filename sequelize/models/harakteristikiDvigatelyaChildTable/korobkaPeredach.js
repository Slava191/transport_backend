const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('korobka_peredach', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        user_id:{
            type: DataTypes.INTEGER,
        },
        Tip:{
            type: DataTypes.STRING,
        }
	});
};
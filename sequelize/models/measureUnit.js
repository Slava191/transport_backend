const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('measure_unit', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        user_id:{
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        global_id: {
            type: DataTypes.INTEGER
        },
        NAME: {
            type: DataTypes.STRING
        },
        IDX: {
            type: DataTypes.STRING
        },
        SECTION: {
            type: DataTypes.INTEGER
        },
        SUBSECTION: {
            type: DataTypes.INTEGER
        },
        ROWID: {
            type: DataTypes.INTEGER
        },
        NATIONAL: {
            type: DataTypes.STRING
        },
        INTERNATIONAL: {
            type: DataTypes.STRING
        },
        ALFANATIONAL: {
            type: DataTypes.STRING
        },
        ALFAINTERNATIONAL: {
            type: DataTypes.STRING
        },
        CODE: {
            type: DataTypes.INTEGER
        }
	});
};
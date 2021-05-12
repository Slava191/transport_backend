const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'user'
    },
    tariff: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    fullName: {
      type: DataTypes.STRING,
    }
	}, {
    defaultScope: {
      //attributes: { exclude: ['password'] }
    }
  });
};
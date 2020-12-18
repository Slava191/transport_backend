const Sequelize = require("sequelize");
const config = require('config');

const sequelize = new Sequelize(
    config.get('sequalize.database'), 
    config.get('sequalize.login'), 
    config.get('sequalize.password'), 
    {
        ...config.get('mssql')
    }
);

module.exports = sequelize
// const Sequelize = require("sequelize");
// const config = require('config');

// const sequelize = new Sequelize(
//     config.get('sequalize.database'), 
//     config.get('sequalize.login'), 
//     config.get('sequalize.password'), 
//     {
//         ...config.get('mssql')
//     }
// );

// sequelize.authenticate().then((err) => {
//     console.log('_________________________________________');
//     console.log('Connection successful', err);
//     console.log('_________________________________________');
// })
// .catch((err) => {
//     console.log('_________________________________________');
//     console.log('Unable to connect to database ', err);
//     console.log('_________________________________________');
// });

// module.exports = sequelize
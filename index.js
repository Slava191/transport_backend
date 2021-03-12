const app = require("./app")
const clientApp = require("./clientApp")
const sequelize = require('./sequelize');
const config = require('config');

async function assertDatabaseConnectionOk() {
	console.log(`Checking database connection...`);
	try {
		await sequelize.authenticate();
		console.log('Database connection OK!');
	} catch (error) {
		console.log('Unable to connect to the database:');
		console.log(error.message);
		process.exit(1);
	}
}

async function init() {
	await assertDatabaseConnectionOk();

  app.listen(config.get('server.port'), () => {
    console.log(`API listening at http://localhost:${config.get('server.port')}`)
  })
  
  clientApp.listen(8081, () => {
    console.log(`SPA listening at http://localhost:8081}`)
  })
  
}

init();


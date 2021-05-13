const { Sequelize } = require('sequelize');
const { applyExtraSetup } = require('./extra-setup');
const { insertTestData } = require('./insertTestData')
const config = require('config');

const sequelize = new Sequelize(
	config.get('sequalize.database'), 
	config.get('sequalize.login'), 
	config.get('sequalize.password'), 
	{
		...config.get('mssql'),
		logging: false,
	}
);

const modelDefiners = [
	require('./models/ATS'),
	require('./models/ATSFile'),
	require('./models/gabarity'),
	require('./models/harakteristikiDvigatelya'),
		require('./models/harakteristikiDvigatelyaChildTable/korobkaPeredach'),
		require('./models/harakteristikiDvigatelyaChildTable/dvigatel'),
		require('./models/harakteristikiDvigatelyaChildTable/cilindri'),
	require('./models/hodovyeKachestva'),
	require('./models/informaciyaOTekhnicheskihUzlahIAgregatah'),
		require('./models/informaciyaOTekhnicheskihUzlahIAgregatahChildTable/bortovoeNapryazhenie'),
		require('./models/informaciyaOTekhnicheskihUzlahIAgregatahChildTable/kabina'),
	require('./models/massa'),
	require('./models/transmissiyaIKolyosa'),
	require('./models/user'),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

// We execute any extra setup after the models are defined, such as adding associations.
applyExtraSetup(sequelize);

//{force:true}

// sequelize.sync({force:true}).then(()=>{
// 	console.log("Tables have been created");
// }).catch(err=>console.log(err));

async function reset() {

	try{


		await sequelize.sync({ force: true });
		console.log("Tables have been created");


		await insertTestData(sequelize);
		console.log("Test data have been inserted");

		//ЗАПОЛНИТЬ ВСЕ

	}catch(err){
		console.log(err)
	}
	
}

reset();


// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;

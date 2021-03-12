const gabarity = require("./models/gabarity")

function applyExtraSetup(sequelize) {
	// const { instrument, orchestra } = sequelize.models;

	// orchestra.hasMany(instrument);
	// instrument.belongsTo(orchestra);

	const {  
		ATS,
		gabarity,
		harakteristiki_dvigatelya,
		hodovye_kachestva,
		informaciya_o_tekhnicheskih_uzlah_i_agregatah,
		massa,
		transmissiya_i_kolyosa,
		user
	} = sequelize.models

	console.log("_________________________")
	console.log("Existing modules")

	console.log(sequelize.models)

	console.log("_________________________")

	//user.hasMany(gabarity, { foreignKey: 'user_id' })

	ATS.belongsTo(user, {foreignKey: 'user_id'})
	gabarity.belongsTo(user, {foreignKey: 'user_id'})
	harakteristiki_dvigatelya.belongsTo(user, {foreignKey: 'user_id'})
	hodovye_kachestva.belongsTo(user, {foreignKey: 'user_id'})
	informaciya_o_tekhnicheskih_uzlah_i_agregatah.belongsTo(user, {foreignKey: 'user_id'})
	massa.belongsTo(user, {foreignKey: 'user_id'})
	transmissiya_i_kolyosa.belongsTo(user, {foreignKey: 'user_id'})

	//gabarity.hasMany(ATS, { foreignKey: 'user_id' })

	//RESTRICT
	//foreignKey: 'gabarity_id', 
	
	//gabarity.hasMany(ATS, { foreignKey: 'gabarity_id', onDelete: 'CASCADE' });
	ATS.belongsTo(gabarity, { 
		foreignKey: { name: 'gabarity_id', allowNull: false },  
		onDelete: 'NO ACTION', 
	})
	ATS.belongsTo(harakteristiki_dvigatelya, {foreignKey: 'harakteristiki_dvigatelya_id'})
	ATS.belongsTo(hodovye_kachestva, {foreignKey: 'hodovye_kachestva_id'})
	ATS.belongsTo(informaciya_o_tekhnicheskih_uzlah_i_agregatah, {foreignKey: 'informaciya_o_tekhnicheskih_uzlah_i_agregatah_id'})
	ATS.belongsTo(massa, {foreignKey: 'massa_id'})
	ATS.belongsTo(transmissiya_i_kolyosa, {foreignKey: 'transmissiya_i_kolyosa_id'})

}

module.exports = { applyExtraSetup };

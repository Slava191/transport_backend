function applyExtraSetup(sequelize) {

	const {  
		ATS,
		ATSFile,
		gabarity,
		harakteristiki_dvigatelya,
		hodovye_kachestva,
		informaciya_o_tekhnicheskih_uzlah_i_agregatah,
		massa,
		transmissiya_i_kolyosa,
		user
	} = sequelize.models

	//Связь: user - ATS
	user.hasMany(ATS, { foreignKey: 'user_id', onDelete: 'SET NULL' })
	ATS.belongsTo(user, {foreignKey: 'user_id'})

	//Связь: user - ATSFiles
	user.hasMany(ATSFile, { foreignKey: 'user_id', onDelete: 'SET NULL' })
	ATSFile.belongsTo(user, {foreignKey: 'user_id'})

	//Связь: ATS - ATSFiles
	ATS.hasMany(ATSFile, { foreignKey: 'ATS_id', onDelete: 'CASCADE' })
	ATSFile.belongsTo(ATS, {foreignKey: 'ATS_id'})

	// ATS.addHook('beforeDestroy', (file, options) => {
	// 	console.log("Хук!!!")
	// 	console.log(file, options)
	// });

	const contentItems = [
		gabarity,
		harakteristiki_dvigatelya,
		hodovye_kachestva,
		informaciya_o_tekhnicheskih_uzlah_i_agregatah,
		massa,
		transmissiya_i_kolyosa
	]

	//Связи: Комплектующие - ATS, Пользователи - Комплектующие
	for(const item of contentItems){

		console.log(`${item.name}_id`)

		item.hasMany(ATS, { foreignKey: `${item.name}_id`, onDelete: 'NO ACTION' });
		ATS.belongsTo(item, { foreignKey: `${item.name}_id`})

		user.hasMany(item, { foreignKey: 'user_id',  onDelete: 'SET NULL'})
		item.belongsTo(user, {foreignKey: 'user_id'})	
	}
	

}

module.exports = { applyExtraSetup };

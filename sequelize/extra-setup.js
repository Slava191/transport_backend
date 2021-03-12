function applyExtraSetup(sequelize) {

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

	user.hasMany(ATS, { foreignKey: 'user_id', onDelete: 'SET NULL' })
	ATS.belongsTo(user, {foreignKey: 'user_id'})

	const contentItems = [
		gabarity,
		harakteristiki_dvigatelya,
		hodovye_kachestva,
		informaciya_o_tekhnicheskih_uzlah_i_agregatah,
		massa,
		transmissiya_i_kolyosa
	]

	for(const item of contentItems){

		console.log(`${item.name}_id`)

		item.hasMany(ATS, { foreignKey: `${item.name}_id`, onDelete: 'NO ACTION' });
		ATS.belongsTo(item, { foreignKey: `${item.name}_id`})

		user.hasMany(item, { foreignKey: 'user_id',  onDelete: 'SET NULL'})
		item.belongsTo(user, {foreignKey: 'user_id'})	
	}
	

}

module.exports = { applyExtraSetup };

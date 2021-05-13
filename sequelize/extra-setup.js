function applyExtraSetup(sequelize) {

	const {  
		ATS,
		ATSFile,
		gabarity,
		harakteristiki_dvigatelya,
			korobka_peredach,
			dvigatel,
			cilindri,
		hodovye_kachestva,
		informaciya_o_tekhnicheskih_uzlah_i_agregatah,
			bortovoe_napryazhenie,
			kabina,
		massa,
		transmissiya_i_kolyosa,
		user
	} = sequelize.models

	const setOneToMany = (entityOne, entityTwo, onDelete = 'NO ACTION') => {

		console.log(`Установлена связь 1:М (${entityOne.name}:${entityTwo.name}, onDelete: ${onDelete})`)

		entityOne.hasMany(entityTwo, { foreignKey: `${entityOne.name}_id`, onDelete })
		entityTwo.belongsTo(entityOne, {foreignKey: `${entityOne.name}_id`})
	}
	
	const setOneToManyWithArrOfEntiesTwo = (entityOne, arrOfEntities, onDelete = 'NO ACTION') => {
		for(const entityTwo of arrOfEntities)
			setOneToMany(entityOne, entityTwo, onDelete)	
	}

	const setOneToManyWithArrOfEntiesOne = (arrOfEntities, entityTwo, onDelete = 'NO ACTION') => {
		for(const entityOne of arrOfEntities)
			setOneToMany(entityOne, entityTwo, onDelete)
	}

	//Все сущнности, исключая пользователя
	const modelsArrExcludingUser = Object.values(sequelize.models).filter(model => model.name !== 'user')

	//Связи: пользователь - все сущности.
	setOneToManyWithArrOfEntiesTwo(user, modelsArrExcludingUser, 'SET NULL')

	//Связь: ATS - ATSFiles
	setOneToMany(ATS, ATSFile, 'CASCADE')

	//Связи: Комплектующие - ATS
	setOneToManyWithArrOfEntiesOne([
		gabarity,
		harakteristiki_dvigatelya,
		hodovye_kachestva,
		informaciya_o_tekhnicheskih_uzlah_i_agregatah,
		massa,
		transmissiya_i_kolyosa
	], ATS)
	
	//Связь: цилиндры - двигтель
	setOneToMany(cilindri, dvigatel)

	//Связи: дочернии - хар-ки двигателя
	setOneToManyWithArrOfEntiesOne(
		[dvigatel, korobka_peredach], 
		harakteristiki_dvigatelya
	)
	
	//Связи: дочернии - тех-кие хар-ки авто
	setOneToManyWithArrOfEntiesOne(
		[bortovoe_napryazhenie, kabina], 
		informaciya_o_tekhnicheskih_uzlah_i_agregatah
	)

}

module.exports = { applyExtraSetup };

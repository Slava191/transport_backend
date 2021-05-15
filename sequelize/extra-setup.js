function applyExtraSetup(sequelize) {

	const {  
		ATS,
		ATSFile,
		bortovoe_napryazhenie,
		cilindry,
		dvigatel,
		gabarity,
		gruppa_ATS,
		harakteristiki_dvigatelya,
		harakteristiki_pricepov,
		hodovye_kachestva,
		kabina,
		kolesnaya_formula,
		koliosa,
		korobka_peredach,
		massa,
		tech_harakteristiki_avto,
		tip_ATS,
		tip_shin,
		ves_pricepov,
		user
	} = sequelize.models

	const mainModels = [ATS, ATSFile, user]
	const mainModelsNames = mainModels.map(model => model.name)
	const dictionaryModels = Object.values(sequelize.models).filter(model => !mainModelsNames.includes(model.name))

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
		dvigatel,
		gabarity,
		gruppa_ATS,
		harakteristiki_dvigatelya,
		harakteristiki_pricepov,
		hodovye_kachestva,
		kolesnaya_formula,
		koliosa,
		korobka_peredach,
		massa,
		tech_harakteristiki_avto,
		tip_ATS,
		ves_pricepov,
	], ATS)
	
	//Связь: цилиндры - двигтель
	setOneToMany(cilindry, dvigatel)

	setOneToMany(dvigatel, harakteristiki_dvigatelya)

	//Связи: дочернии - тех-кие хар-ки авто
	setOneToManyWithArrOfEntiesOne(
		[bortovoe_napryazhenie, kabina], 
		tech_harakteristiki_avto
	)

	setOneToMany(tip_shin, koliosa)

}

module.exports = { applyExtraSetup };

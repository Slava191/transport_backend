const { Sequelize } = require('sequelize');
const { applyExtraSetup } = require('./extra-setup');
const config = require('config');

const sequelize = new Sequelize(
	config.get('sequalize.database'), 
	config.get('sequalize.login'), 
	config.get('sequalize.password'), 
	{
		...config.get('mssql')
	}
);

const modelDefiners = [
	require('./models/ATS'),
	require('./models/gabarity'),
	require('./models/harakteristikiDvigatelya'),
	require('./models/hodovyeKachestva'),
	require('./models/informaciyaOTekhnicheskihUzlahIAgregatah'),
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

		await sequelize.models.user.bulkCreate([
			{ 
				login: "admin",
				password: "$2b$10$RdYSPBb79O9UCCDxq/TSoeV96u1GSqXi1XQ6CkU92ljiKKQxU11s6",
				role: "admin",
				tariff: 1,
				fullName: "Вячеслав Владиславович Чекменёв"
			},
		]);

		await sequelize.models.gabarity.bulkCreate([
			{
				user_id: 1,
				Gabaritnye_razmery_dlina: 6,
				Gabaritnye_razmery_shirina: 2,
				Gabaritnye_razmery_vysota: 2,
				Vysota_shassi_v_zavisimosti_ot_konstrukcii: 1,
				Baza: 2,
				Pogruzochnaya_vysota: 1,
				Primechaniya: "",
			},
			{
				user_id: 1,
				Gabaritnye_razmery_dlina: 6500,
				Gabaritnye_razmery_shirina: 3500,
				Gabaritnye_razmery_vysota: 2500,
				Vysota_shassi_v_zavisimosti_ot_konstrukcii: 1,
				Baza: 2,
				Pogruzochnaya_vysota: 1,
				Primechaniya: "",
			},
		]);

		await sequelize.models.harakteristiki_dvigatelya.bulkCreate([
			{
				user_id: 1,
				Dvigatel: "Дизель турбонаддув",
				Raspolozhenie_i_chislo_cilindrov: 4,
				Rabochij_obyom_dvigatelya: 10,
				Moshchnost: 300,
				Krutyashch_moment: 100,
				Raskhod_topliva: 5,
				Primechaniya: "Модель 740.55",
			},
			{
				user_id: 1,
				Dvigatel: "Бензиновый",
				Raspolozhenie_i_chislo_cilindrov: 4,
				Rabochij_obyom_dvigatelya: 10,
				Moshchnost: 10000,
				Krutyashch_moment: 100,
				Raskhod_topliva: 5,
				Primechaniya: "",
			},
		]);

		await sequelize.models.hodovye_kachestva.bulkCreate([
			{
				user_id: 1,
				Radius_povorota: 11500,
				Maksimalno_preodolevaemyj_podyom: 120,
				Koleya: 3,
				Maks_skorost: 90,
				Primechaniya: "",
			},
		]);

		
		await sequelize.models.informaciya_o_tekhnicheskih_uzlah_i_agregatah.bulkCreate([
			{
				user_id: 1,
				Bortovoe_napryazhenie: 220,
				Obyom_toplivnyh_bakov: 350,
				Markirovka_zadnih_mostov: "ВАЗ 2101",
				Varianty_dop_osevyh_nagruzok: "-",
				Primechaniya: "",
			},
		]);

		await sequelize.models.massa.bulkCreate([
			{
				user_id: 1,
				Dopustimaya_polnaya_massa_avtomobilya: 21600,
				Dopustimaya_polnaya_massa_avtopoezda: 1600,
				Gruzopoyomnost_nagruzka_na_SSU: 2000,
				Raspredelenie_nagruzki_na_dorogu_snaryazhyonnaya_massa_perednyaya_os: 2000,
				Raspredelenie_nagruzki_na_dorogu_snaryazhyonnaya_massa_zadnyaya_os: 2000,
				Raspredelenie_nagruzki_na_dorogu_polnaya_massa_perednyaya_os: 2000,
				Raspredelenie_nagruzki_na_dorogu_polnaya_massa_zadnyaya_os: 2000,
				Dopustimaya_polnaya_massa: 2000,
				Polnaya_massa_na_SSU: 2000,
				Polnaya_massa_na_telezhku: 2000,
				Massa_v_snaryazhennom_sostoyanii: 2000,
				Primechaniya: "",
			},
		]);

		await sequelize.models.transmissiya_i_kolyosa.bulkCreate([
			{
				user_id: 1,
				Kolyosnaya_baza: 1,
				Tip_shin: "всесезонные",
				Kolyosnaya_formula: "П*r^2/2",
				Chislo_osej_kolyos: 8,
				Korobka_peredach: "МКПП",
				Primechaniya: 1,
			},
		]);


		await sequelize.models.ATS.bulkCreate([
			{
				user_id: 1,
				hodovye_kachestva_id:1,
				gabarity_id: 1,
				harakteristiki_dvigatelya_id: 1,
				informaciya_o_tekhnicheskih_uzlah_i_agregatah_id: 1,
				massa_id:1,
				transmissiya_i_kolyosa_id: 1,
				Marka_model: "КамАЗ 43118-3078-24",
				Tip_ATS: "контейнеровоз",
				Kabina: "расположенная над двигателем, рестайлинговая",
				Klass: "контейнеровоз",
				Primechaniya: "",
			},
			{
				user_id: 1,
				hodovye_kachestva_id:1,
				gabarity_id: 2,
				harakteristiki_dvigatelya_id: 2,
				informaciya_o_tekhnicheskih_uzlah_i_agregatah_id: 1,
				massa_id:1,
				transmissiya_i_kolyosa_id: 1,
				Marka_model: "ЗИЛ КО-440-АД",
				Tip_ATS: "карбюраторный / дизельный",
				Kabina: "расположенная над двигателем",
				Klass: "бункеровоз",
				Primechaniya: "",
			},
		]);


		//ЗАПОЛНИТЬ ВСЕ

	}catch(err){
		console.log(err)
	}
	
}

reset();


// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;

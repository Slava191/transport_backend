const measureUnitsData = require('../model_description/data/measureUnits')

const insertTestData = async (sequelize) => {

    await sequelize.models.user.bulkCreate([
        { 
            login: "admin",
            password: "$2b$10$RdYSPBb79O9UCCDxq/TSoeV96u1GSqXi1XQ6CkU92ljiKKQxU11s6",
            role: "admin",
            tariff: 1,
            fullName: "Вячеслав Владиславович Чекменёв"
        },
    ]);

    // await sequelize.models.measure_unit.bulkCreate(measureUnitsData);

    await sequelize.models.massa.bulkCreate([
        {
            user_id: 1,
            Snaryazhyonnaya_massa_perednyaya_os:2000,
            Snaryazhyonnaya_massa_zadnyaya_os:3000,
            Polnaya_massa_perednyaya_os:4000,
            Polnaya_massa_zadnyaya_os:5000
        },
    ]);

    await sequelize.models.gabarity.bulkCreate([
        {
            user_id: 1,
            Dlina: 4,
            Shirina: 2,
            Visota: 2,
        },
        {
            user_id: 1,
            Dlina: 6,
            Shirina: 2,
            Visota: 2,
        },
    ]);

    await sequelize.models.korobka_peredach.bulkCreate([
        {
            user_id: 1,
            Tip: "МКПП"
        },
        {
            user_id: 1,
            Tip: "АКПП"
        },
    ]);

    await sequelize.models.cilindry.bulkCreate([
        {
            user_id: 1,
            Raspolozhenie_i_chislo_cilindrov: 4,
        },
        {
            user_id: 1,
            Raspolozhenie_i_chislo_cilindrov: 8,
        },
    ]);

    await sequelize.models.dvigatel.bulkCreate([
        {
            user_id: 1,
            cilindri_id: 1,
            Dvigatel: "Дизель турбонаддув",
            Rabochij_obyom_dvigatelya: 10,
            Moshchnost: 300,
            Krutyashch_moment: 100,
        },
        {
            user_id: 1,
            cilindri_id: 2,
            Dvigatel: "Бензиновый",
            Rabochij_obyom_dvigatelya: 10,
            Moshchnost: 10000,
            Krutyashch_moment: 100,
        },
    ]);

    await sequelize.models.harakteristiki_dvigatelya.bulkCreate([
        {
            user_id: 1,
            Raskhod_topliva: 5,
            korobka_peredach_id: 1,
            dvigatel_id: 1,
        },
        {
            user_id: 1,
            Raskhod_topliva: 5,
            korobka_peredach_id: 2,
            dvigatel_id: 2,
        },
    ]);

    await sequelize.models.hodovye_kachestva.bulkCreate([
        {
            user_id: 1,
            Radius_povorota: 11500,
            Maksimalno_preodolevaemyj_podyom: 120,
            Maks_skorost: 90,
        },
    ]);


    await sequelize.models.bortovoe_napryazhenie.bulkCreate([
        {
            user_id: 1,
            Bortovoe_napryazhenie: 220,
        },
    ]);

    await sequelize.models.kabina.bulkCreate([
        {
            user_id: 1,
            Kabina: "расположенная над двигателем, рестайлинговая",
        },
    ]);
    
    await sequelize.models.tech_harakteristiki_avto.bulkCreate([
        {
            user_id: 1,
            kabina_id:1,
            bortovoe_napryazhenie:1,
            Obyom_toplivnyh_bakov: 350,
        },
    ]);

    await sequelize.models.kolesnaya_formula.bulkCreate([
        {
            user_id: 1,
            Kolesnaya_formula: "6x4"
        },
    ]);

    await sequelize.models.tip_ATS.bulkCreate([
        {
            user_id: 1,
            kabina_id:1,
            Naimenovanie: "грузовые автомобили",
            Abbreviatura: "грузовые автомобили",
        },
        {
            user_id: 1,
            kabina_id:1,
            Naimenovanie: "легковые автомобили",
            Abbreviatura: "легковые автомобили",
        },
    ]);

    await sequelize.models.gruppa_ATS.bulkCreate([
        {
            user_id: 1,
            kabina_id:1,
            Naimenovanie: "Грузовики",
            Abbreviatura: "Грузовики",
        },
        {
            user_id: 1,
            kabina_id:1,
            Naimenovanie: "Контейнеровозы",
            Abbreviatura: "Контейнеровозы",
        },
    ]);

    await sequelize.models.tip_shin.bulkCreate([
        {
            user_id: 1,
            Shini: "Внедорожные шины",
        },
    ]);

    await sequelize.models.koliosa.bulkCreate([
        {
            user_id: 1,
            tip_shin_id:1,
            Koliosnaya_baza: "3",
        },
    ]);

    await sequelize.models.ves_pricepov.bulkCreate([
        {
            user_id: 1,
            Snaryazh_massa_na_1_os: "120",
            Snaryazh_massa_na_2_os: "100",
        },
    ]);


    await sequelize.models.harakteristiki_pricepov.bulkCreate([
        {
            user_id: 1,
            Porguz_visota: "1",
            Koleya: "2",
            Baza: "3",
            Maks_skorost: "120"
        },
    ]);




    // await sequelize.models.transmissiya_i_kolyosa.bulkCreate([
    //     {
    //         user_id: 1,
    //         Kolyosnaya_baza: 1,
    //         Tip_shin: "всесезонные",
    //         Kolyosnaya_formula: "П*r^2/2",
    //         Chislo_osej_kolyos: 8,
    //         Korobka_peredach: "МКПП",
    //         Primechaniya: 1,
    //     },
    // ]);


    // await sequelize.models.ATS.bulkCreate([
    //     {
    //         user_id: 1,
    //         hodovye_kachestva_id:1,
    //         gabarity_id: 1,
    //         harakteristiki_dvigatelya_id: 1,
    //         informaciya_o_tekhnicheskih_uzlah_i_agregatah_id: 1,
    //         massa_id:1,
    //         transmissiya_i_kolyosa_id: 1,
    //         Marka_model: "КамАЗ 43118-3078-24",
    //         Tip_ATS: "контейнеровоз",
    //         Kabina: "расположенная над двигателем, рестайлинговая",
    //         Klass: "контейнеровоз",
    //         Primechaniya: "",
    //     },
    //     {
    //         user_id: 1,
    //         hodovye_kachestva_id:1,
    //         gabarity_id: 2,
    //         harakteristiki_dvigatelya_id: 2,
    //         informaciya_o_tekhnicheskih_uzlah_i_agregatah_id: 1,
    //         massa_id:1,
    //         transmissiya_i_kolyosa_id: 1,
    //         Marka_model: "ЗИЛ КО-440-АД",
    //         Tip_ATS: "карбюраторный / дизельный",
    //         Kabina: "расположенная над двигателем",
    //         Klass: "бункеровоз",
    //         Primechaniya: "",
    //     },
    // ]);


    // await sequelize.models.ATSFile.bulkCreate([
    //     {
    //         user_id: 1,
    //         ATS_id: 1,
    //         name: "track1.jpg"
    //     },
    //     {
    //         user_id: 1,
    //         ATS_id: 2,
    //         name: "track2.jpg"
    //     },
    // ]);
}

module.exports = { insertTestData };
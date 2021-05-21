module.exports = {
    modelName: "tech_harakteristiki_avto",
    ruModelName: "Технические характеристики",
    URLs: {
        get: 'tech_harakteristiki_avto',
    },
    fields: {
        Obyom_toplivnyh_bakov: {
            label: "Объем топливных баков", value: "", units: "л",
            type: 'INTEGER',
            units_gloabal_id: "273472400",
        },
        bortovoe_napryazhenie_id: {
            label: "Бортовое напряжение", 
            value: "", 
            model: "bortovoe_napryazhenie",
            inputComponent: "SelectFromList",
            outputComponent: "ShowCharacteristic",
            type: 'INTEGER',
        },
        kabina_id: {
            label: "Кабина", 
            value: "", 
            model: "kabina",
            inputComponent: "SelectFromList",
            outputComponent: "ShowCharacteristic",
            type: 'INTEGER',
        }
    }
}
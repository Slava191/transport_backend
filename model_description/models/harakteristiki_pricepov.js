module.exports = {
    modelName: "harakteristiki_pricepov",
    ruModelName: "Характеристики прицепов",
    URLs: {
        get: 'harakteristiki_pricepov',
    },
    fields: {
        Porguz_visota: {
            label: "Погрузочная высота", 
            value: "", 
            units: "мм",
            type: "INTEGER",
            units_gloabal_id: "273472340"
        },
        Koleya: {
            label: "Колея", 
            value: "", 
            units: "мм",
            type: "INTEGER",
            units_gloabal_id: "273472340"
        },
        Baza: {
            label: "База", 
            value: "", 
            units: "мм",
            type: "INTEGER",
            units_gloabal_id: "273472340"
        },
        Maks_skorost: {
            label: "Максимальная скорость", 
            value: "", 
            units: "км/ч",
            type: "INTEGER",
            units_gloabal_id: "273472569"
        }
    }
}
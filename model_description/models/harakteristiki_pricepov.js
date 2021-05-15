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
            units: "м",
            type: "INTEGER"
        },
        Koleya: {
            label: "Колея", 
            value: "", 
            units: "м",
            type: "INTEGER"
        },
        Baza: {
            label: "База", 
            value: "", 
            units: "м",
            type: "INTEGER"
        },
        Maks_skorost: {
            label: "Максимальная скорость", 
            value: "", 
            units: "м/c^2",
            type: "INTEGER"
        }
    }
}
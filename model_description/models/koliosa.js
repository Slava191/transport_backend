module.exports = {
    modelName: "koliosa",
    ruModelName: "Колеса",
    URLs: {
        get: 'koliosa',
    },
    fields: {
        Koliosnaya_baza: {
            label: "Колесная база", value: "",
            units: "м",
            type: 'FLOAT',
            units_gloabal_id: "273472340"
        },
        tip_shin_id: {
            label: "Тип шин", value: "",
            model: "tip_shin",
            inputComponent: "SelectFromList",
            outputComponent: "ShowCharacteristic",
            type: 'INTEGER',
        }
    }
}
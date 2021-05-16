module.exports = {
    modelName: "harakteristiki_dvigatelya",
    ruModelName: "Характеристики двигателя",
    URLs: {
        get: 'harakteristiki_dvigatelya',
    },
    fields: {
        Raskhod_topliva: {
            label: "Расход топлива", 
            value: "", 
            units: "л",
            type: "INTEGER"
        },
        dvigatel_id: {
            label: "Двигатель", value: "",
            model: "dvigatel",
            inputComponent: "SelectFromList",
            outputComponent: "ShowCharacteristic",
            type: 'INTEGER',
        }
    }
}
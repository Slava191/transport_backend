module.exports = {
    modelName: "dvigatel",
    ruModelName: "Двигатель",
    URLs: {
        get: 'dvigatel',
    },
    fields: {
        Dvigatel: {
            label: "Двигатель", value: "",
            type: 'STRING',
        },
        Rabochij_obyom_dvigatelya: {
            label: "Рабочий объем двигателя", value: "", units: "л",
            type: 'INTEGER',
            units_gloabal_id: "273472400",
        },
        Moshchnost: {
            label: "Мощность", value: "", units: "кВт",
            type: 'INTEGER',
            units_gloabal_id: "273472448",
        },
        Krutyashch_moment: {
            label: "Крутящий момент", value: "", units: "Н/м",
            type: 'INTEGER',
            units_gloabal_id: "273472508",
        },
        cilindry_id: {
            label: "Цилиндры", value: "",
            model: "cilindry",
            inputComponent: "SelectFromList",
            outputComponent: "ShowCharacteristic",
            type: 'INTEGER',
        }
    }
}
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
        },
        Moshchnost: {
            label: "Мощность", value: "", units: "кВт",
            type: 'INTEGER',
        },
        Krutyashch_moment: {
            label: "Крутящий момент", value: "", units: "Н/м",
            type: 'INTEGER',
        },
    }
}
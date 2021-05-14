module.exports = {
    modelName: "hodovye_kachestva",
    URLs: {
        get: 'hodovye_kachestva',
    },
    fields: {
        Radius_povorota: {
            label: "Радиус поворота", value: "", units: "м",
            type: 'INTEGER',
        },
        Maksimalno_preodolevaemyj_podyom: {
            label: "Максимальный преодолеваемый подъем", value: "", units: "%",
            type: 'INTEGER',
        },
        Maks_skorost: {
            label: "Максимальная скорость", value: "", units: "км/ч",
            type: 'INTEGER',
        },
    }
}
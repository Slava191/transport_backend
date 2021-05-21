module.exports = {
    modelName: "hodovye_kachestva",
    ruModelName: "Ходовые качества",
    URLs: {
        get: 'hodovye_kachestva',
    },
    fields: {
        Radius_povorota: {
            label: "Радиус поворота", value: "", units: "м",
            type: 'FLOAT',
            units_gloabal_id: "273472348",
        },
        Maksimalno_preodolevaemyj_podyom: {
            label: "Максимальный преодолеваемый подъем", value: "", units: "%",
            type: 'FLOAT',
            units_gloabal_id: "273473063",
        },
        Maks_skorost: {
            label: "Максимальная скорость", value: "", units: "км/ч",
            type: 'FLOAT',
            units_gloabal_id: "273472569",
        },
    }
}
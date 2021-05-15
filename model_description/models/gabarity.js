module.exports = {
    modelName: "gabarity",
    ruModelName: "Габариты",
    URLs: {
        get: 'gabarity',
    },
    fields: {
        Dlina: {
            label: "Длина", 
            value: "",
            units: "м",
            type: 'INTEGER',
        },
        Shirina: {
            label: "Ширина", 
            value: "", 
            units: "м",
            type: 'INTEGER',
        },
        Visota: {
            label: "Высота", 
            value: "", 
            units: "м",
            type: 'INTEGER',
        },
    }
}
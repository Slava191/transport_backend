module.exports = {
    modelName: "ves_pricepov",
    ruModelName: "Вес прицепов",
    URLs: {
        get: 'ves_pricepov',
    },
    fields: {
        Snaryazh_massa_na_1_os: {
            label: "Снаряженная масса на 1ую ось", 
            value: "", 
            units: "кг",
            type: 'INTEGER',
        },
        Snaryazh_massa_na_2_os: {
            label: "Снаряженная масса на 2ую ось", 
            value: "", 
            units: "кг",
            type: 'INTEGER',
        },
    }
}
module.exports = (data, DataTypes) => {

    const rtnObj = {}

    console.log(Object.entries(data.fields))

    for(const [key, value] of Object.entries(data.fields)){
        rtnObj[key] = {
            type: DataTypes[value.type]
        }
    }

    return rtnObj

}
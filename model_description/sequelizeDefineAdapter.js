module.exports = (data, DataTypes) => {

    const rtnObj = {}

    for(const [key, value] of Object.entries(data.fields)){

        rtnObj[key] = { type: DataTypes[value.type] }

        if(value.units_gloabal_id){
            rtnObj[`${key}_units_gloabal_id`] = {
                type: DataTypes.INTEGER,
                defaultValue: value.units_gloabal_id
            }
        }

    }

    //console.log(rtnObj)

    return rtnObj

}
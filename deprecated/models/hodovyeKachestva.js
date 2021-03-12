const Sequelize = require("sequelize");
const sequelize = require("../libs/sequelize")

const User = require("./user")
const ATS = require("./ATS");

const HodovyeKachestva = sequelize.define("hodovye_kachestva", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    user_id:{
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: "id"
        }
    },
    Radius_povorota: {
        type: Sequelize.INTEGER,
    },
    Maksimalno_preodolevaemyj_podyom: {
        type: Sequelize.INTEGER,
    },
    Koleya: {
        type: Sequelize.INTEGER,
    },
    Maks_skorost: {
        type: Sequelize.INTEGER,
    },
    Primechaniya: {
        type: Sequelize.STRING,
    },
});

HodovyeKachestva.hasMany(ATS, {foreignKey: 'hodovye_kachestva_id'})
ATS.belongsTo(HodovyeKachestva, {foreignKey: 'hodovye_kachestva_id'})

HodovyeKachestva.sync().then(result=>{
    //console.log(result);
})
.catch(err=> err);

module.exports = HodovyeKachestva
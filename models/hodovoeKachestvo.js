const Sequelize = require("sequelize");
const sequelize = require("../libs/sequelize")

const User = require("./user")
const ATS = require("./ATS");

const HodovoeKachestvo = sequelize.define("hodovoe_kachestvo", {
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

HodovoeKachestvo.hasMany(ATS, {foreignKey: 'hodovoe_kachestvo_id'})
ATS.belongsTo(HodovoeKachestvo, {foreignKey: 'hodovoe_kachestvo_id'})

HodovoeKachestvo.sync().then(result=>{
    //console.log(result);
})
.catch(err=> console.log(err));

module.exports = HodovoeKachestvo
const Sequelize = require("sequelize");
const sequelize = require("../libs/sequelize")

const User = require("./user")
const ATS = require("./ATS");

const HarakteristikiDvigatelya = sequelize.define("harakteristiki_dvigatelya", {
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
    Dvigatel: {
        type: Sequelize.STRING,
    },
    Raspolozhenie_i_chislo_cilindrov: {
        type: Sequelize.STRING,
    },
    Rabochij_obyom_dvigatelya: {
        type: Sequelize.INTEGER,
    },
    Moshchnost: {
        type: Sequelize.INTEGER,
    },
    Krutyashch_moment: {
        type: Sequelize.INTEGER,
    },
    Raskhod_topliva: {
        type: Sequelize.INTEGER,
    },
    Primechaniya: {
        type: Sequelize.STRING,
    },
});

HarakteristikiDvigatelya.hasMany(ATS, {foreignKey: 'harakteristiki_dvigatelya_id'})
ATS.belongsTo(HarakteristikiDvigatelya, {foreignKey: 'harakteristiki_dvigatelya_id'})

HarakteristikiDvigatelya.sync().then(result=>{
    //console.log(result);
})
.catch(err=> console.log(err));

module.exports = HarakteristikiDvigatelya
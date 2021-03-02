const Sequelize = require("sequelize");
const sequelize = require("../libs/sequelize")

const User = require("./user")
const ATS = require("./ATS");

const Model = sequelize.define("transmissiya_i_kolyosa", {
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
    Kolyosnaya_baza: {
        type: Sequelize.INTEGER,
    },
    Tip_shin: {
        type: Sequelize.STRING,
    },
    Kolyosnaya_formula: {
        type: Sequelize.STRING,
    },
    Chislo_osej_kolyos: {
        type: Sequelize.INTEGER,
    },
    Korobka_peredach: {
        type: Sequelize.STRING,
    },
    Primechaniya: {
        type: Sequelize.STRING,
    },
});

Model.hasMany(ATS, {foreignKey: 'transmissiya_i_kolyosa_id'})
ATS.belongsTo(Model, {foreignKey: 'transmissiya_i_kolyosa_id'})

Model.sync().then(result=>{
    //console.log(result);
})
.catch(err=> err);

module.exports = Model
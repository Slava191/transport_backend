const Sequelize = require("sequelize");
const sequelize = require("../libs/sequelize")

const User = require("./user")
const ATS = require("./ATS");

const Model = sequelize.define("massa", {
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
    Dopustimaya_polnaya_massa_avtomobilya: {
        type: Sequelize.INTEGER,
    },
    Dopustimaya_polnaya_massa_avtopoezda: {
        type: Sequelize.INTEGER,
    },
    Gruzopoyomnost_nagruzka_na_SSU: {
        type: Sequelize.INTEGER,
    },
    Raspredelenie_nagruzki_na_dorogu_snaryazhyonnaya_massa_perednyaya_os: {
        type: Sequelize.INTEGER,
    },
    Raspredelenie_nagruzki_na_dorogu_snaryazhyonnaya_massa_zadnyaya_os: {
        type: Sequelize.INTEGER,
    },
    Raspredelenie_nagruzki_na_dorogu_polnaya_massa_perednyaya_os: {
        type: Sequelize.INTEGER,
    },
    Raspredelenie_nagruzki_na_dorogu_polnaya_massa_zadnyaya_os: {
        type: Sequelize.INTEGER,
    },
    Dopustimaya_polnaya_massa: {
        type: Sequelize.INTEGER,
    },
    Polnaya_massa_na_SSU: {
        type: Sequelize.INTEGER,
    },
    Polnaya_massa_na_telezhku: {
        type: Sequelize.INTEGER,
    },
    Massa_v_snaryazhennom_sostoyanii: {
        type: Sequelize.INTEGER,
    },
    Primechaniya: {
        type: Sequelize.STRING,
    },
});

Model.hasMany(ATS, {foreignKey: 'massa_id'})
ATS.belongsTo(Model, {foreignKey: 'massa_id'})

Model.sync().then(result=>{
    //console.log(result);
})
.catch(err=> console.log(err));

module.exports = Model
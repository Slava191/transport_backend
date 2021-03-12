const Sequelize = require("sequelize");
const sequelize = require("../libs/sequelize")

const User = require("./user")
const ATS = require("./ATS");

const Gabarity = sequelize.define("gabarity", {
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
    Gabaritnye_razmery_dlina: {
        type: Sequelize.INTEGER,
    },
    Gabaritnye_razmery_shirina: {
        type: Sequelize.INTEGER,
    },
    Gabaritnye_razmery_vysota: {
        type: Sequelize.INTEGER,
    },
    Vysota_shassi_v_zavisimosti_ot_konstrukcii: {
        type: Sequelize.STRING,
    },
    Baza: {
        type: Sequelize.INTEGER,
    },
    Pogruzochnaya_vysota: {
        type: Sequelize.INTEGER,
    },
    Primechaniya: {
        type: Sequelize.STRING,
    },
});


// Gabarity.hasMany(ATS, { foreignKey: 'gabarity_id'})
// ATS.belongsTo(Gabarity, {foreignKey: 'gabarity_id'})


Gabarity.sync().then(result=>{
    console.log(result);
})
.catch(err=> err);

module.exports = Gabarity
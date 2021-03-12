const Sequelize = require("sequelize");
const sequelize = require("../libs/sequelize")

const User = require("./user")
const Gabarity = require("./gabarity");

const ATS = sequelize.define("ATS", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    user_id:{
        type: Sequelize.INTEGER,
    },
    hodovye_kachestva_id:{
        type: Sequelize.INTEGER,
    },
    gabarity_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Gabarity,
            key: "id",
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT'
        }
    },
    harakteristiki_dvigatelya_id: {
        type: Sequelize.INTEGER,
    },
    informaciya_o_tekhnicheskih_uzlah_i_agregatah_id: {
        type: Sequelize.INTEGER,
    },
    massa_id: {
        type: Sequelize.INTEGER,
    },
    transmissiya_i_kolyosa_id: {
        type: Sequelize.INTEGER,
    },
    Marka_model: {
        type: Sequelize.STRING,
    },
    Tip_ATS: {
        type: Sequelize.STRING,
    },
    Kabina: {
        type: Sequelize.STRING,
    },
    Klass: {
        type: Sequelize.STRING,
    },
    Primechaniya: {
        type: Sequelize.STRING,
    },
});



ATS.sync().then(result=>{
    console.log(result);
})
.catch(err=> err);

module.exports = ATS
const Sequelize = require("sequelize");
const sequelize = require("../libs/sequelize")

const User = require("./user")
const ATS = require("./ATS");

const Model = sequelize.define("informaciya_o_tekhnicheskih_uzlah_i_agregatah", {
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
    Bortovoe_napryazhenie: {
        type: Sequelize.INTEGER,
    },
    Obyom_toplivnyh_bakov: {
        type: Sequelize.INTEGER,
    },
    Markirovka_zadnih_mostov: {
        type: Sequelize.STRING,
    },
    Varianty_dop_osevyh_nagruzok: {
        type: Sequelize.STRING,
    },
    Primechaniya: {
        type: Sequelize.STRING,
    },
});

Model.hasMany(ATS, {foreignKey: 'informaciya_o_tekhnicheskih_uzlah_i_agregatah_id'})
ATS.belongsTo(Model, {foreignKey: 'informaciya_o_tekhnicheskih_uzlah_i_agregatah_id'})

Model.sync().then(result=>{
    //console.log(result);
})
.catch(err=> err);

module.exports = Model
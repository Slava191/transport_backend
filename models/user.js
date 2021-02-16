const Sequelize = require("sequelize");
const sequelize = require("../libs/sequelize")

const ATS = require("../models/ATS");
const HodovyeKachestva = require("./hodovyeKachestva");
const Gabarity = require("../models/gabarity");
const HarakteristikiDvigatelya = require("../models/harakteristikiDvigatelya")

const InformaciyaOTekhnicheskihUzlahIAgregatah = require("../models/informaciyaOTekhnicheskihUzlahIAgregatah")
const Massa = require("../models/massa")
const TransmissiyaIKolyosa = require("../models/transmissiyaIKolyosa")

const User = sequelize.define("user", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    login: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    role: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'user'
    },
    tariff: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    fullName: {
      type: Sequelize.STRING,
    },
});

//User.hasMany(ATS, {foreignKey: 'user_id'})

ATS.belongsTo(User, {foreignKey: 'user_id'})
HodovyeKachestva.belongsTo(User, {foreignKey: 'user_id'})
Gabarity.belongsTo(User, {foreignKey: 'user_id'})
HarakteristikiDvigatelya.belongsTo(User, {foreignKey: 'user_id'})
InformaciyaOTekhnicheskihUzlahIAgregatah.belongsTo(User, {foreignKey: 'user_id'})
Massa.belongsTo(User, {foreignKey: 'user_id'})
TransmissiyaIKolyosa.belongsTo(User, {foreignKey: 'user_id'})

User.sync().then(result=>{
    //console.log(result);
})
.catch(err=> console.log(err));

module.exports = User
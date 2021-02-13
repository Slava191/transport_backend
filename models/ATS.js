const Sequelize = require("sequelize");
const sequelize = require("../libs/sequelize")

const User = require("../models/user")

const ATS = sequelize.define("ATS", {
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



sequelize.sync().then(result=>{
    //console.log(result);
})
.catch(err=> console.log(err));

module.exports = ATS
const Sequelize = require("sequelize");
const sequelize = require("../libs/sequelize")

// const User = require("./user")
// const HodovoeKachestvo = require("./hodovoeKachestvo");

const ATS = sequelize.define("ATS", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    user_id:{
        type: Sequelize.INTEGER,
        // references: {
        //     model: User,
        //     key: "id"
        // }
    },
    hodovoe_kachestvo_id:{
        type: Sequelize.INTEGER,
    //     // references: {
    //     //     model: HodovoeKachestvo,
    //     //     key: "id"
    //     // }
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
    //console.log(result);
})
.catch(err=> console.log(err));

module.exports = ATS
const Sequelize = require("sequelize");
const sequelize = require("../libs/sequelize")

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
    }
});

sequelize.sync().then(result=>{
    //console.log(result);
})
.catch(err=> console.log(err));

module.exports = User
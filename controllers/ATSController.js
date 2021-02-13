const User = require("../models/user");
const ATS = require("../models/ATS");
const sequelize = require("../libs/sequelize")

exports.getAllATS = async function(req, res){

    try{

        let allATS = await ATS.findAll({raw:true, include: [User]})
        console.log(allATS)

        //let [ allATS ] = await sequelize.query('SELECT a.*, u.login FROM ATs a INNER JOIN users u ON a.user_id = u.id')

        res.send(allATS)

    }catch(e){
        console.log(e)
    }

};

exports.addATS = async function (req, res){

    try{

        const {        
            Marka_model, 
            Tip_ATS, 
            Kabina, 
            Klass, 
            Primechaniya 
        }  = req.body

        const { id: user_id } = req.user

        const addedATS = await ATS.create({ 
            user_id,
            Marka_model, 
            Tip_ATS, 
            Kabina, 
            Klass, 
            Primechaniya 
        })

        res.send(addedATS)

    }catch(e){
        console.log(e)
    }

}
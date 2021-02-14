//const User = require("../models/user");
const HodovoeKachestvo = require("../models/hodovoeKachestvo");
//const sequelize = require("../libs/sequelize")

exports.getAll = async function(req, res){

    try{

        let list = await HodovoeKachestvo.findAll({raw:true})

        res.send(list)

    }catch(e){
        console.log(e)
    }

};

exports.add = async function (req, res){

    try{

        const {        
            Radius_povorota, 
            Maksimalno_preodolevaemyj_podyom, 
            Koleya, 
            Maks_skorost, 
            Primechaniya 
        }  = req.body

        const { id: user_id } = req.user

        const added = await HodovoeKachestvo.create({ 
            user_id,
            Radius_povorota, 
            Maksimalno_preodolevaemyj_podyom, 
            Koleya, 
            Maks_skorost,
            Primechaniya 
        })

        res.send(added)

    }catch(e){
        console.log(e)
    }

}
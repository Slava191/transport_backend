const User = require("../models/user");
const ATS = require("../models/ATS");
// const HodovyeKachestva = require("../models/hodovyeKachestva");
// const Gabarity = require("../models/gabarity")

//const sequelize = require("../libs/sequelize")

exports.getAllATS = async function(req, res){

    try{

        let allATS = await ATS.findAll({
            raw:true, 
            include: [User],
            order: [
                ['id', 'DESC']
            ]
        })

        //let [ allATS ] = await sequelize.query('SELECT a.*, u.login FROM ATs a INNER JOIN users u ON a.user_id = u.id')

        res.send(allATS)

    }catch(e){
        console.log(e)
    }

};

exports.addATS = async function (req, res){

    try{

        const data  = req.body

        const { id: user_id } = req.user

        const addedATS = await ATS.create({ 
            ...data,
            user_id
        })

        res.send(addedATS)

    }catch(e){
        console.log(e)
    }

}
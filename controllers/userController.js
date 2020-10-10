const User = require("../models/user")
const jwt = require('jsonwebtoken'); 
const bcrypt = require('bcrypt');
const config = require('config');
const saltRounds = 10;

function getPasswordHash(password){

    return new Promise((resolve, reject) => {

        bcrypt.hash(password, saltRounds, (err, hash) => {

            if (err) reject(err)

            resolve(hash)

        });

    })

}

exports.authorizeUser = async function (req, res){

    try{

        let { login, password }  = req.body

        const user = await User.findOne({where: { login }})

        if(!user) throw new Error("Not exist")

        const math = await bcrypt.compare(password, user.password)

        if(!math) throw new Error("Incorect password")

        const payload = {
            id: user.id
        }
        
        const token = jwt.sign(payload, config.get('jwtSecret'));

        res.send({token: 'JWT ' + token})

    }catch(e){
        res.send({
            error: e.message
        })
    }


}


exports.addUser = async function (req, res){

    try{

        let { login, password }  = req.body

        const foundedUser = await User.findOne({where: { login }})

        if(foundedUser) throw new Error("User already exist")

        password = await getPasswordHash(password)

        const user = await User.create({ login, password })

        res.send(user)

    }catch(e){
        res.send({
            error: e.message
        })
    }

};

exports.getUsers = async function(req, res){

    try{

        let users = await User.findAll({raw:true})

        /**
         * Это чисто по приколу, 
         * необходимо убрать потом.
         */
        if(req.isAuthenticated){
            users = users.map(user => {
                user.isMy = user.id === req.user.id ? true : false
                return user
            })
        }

        res.send(users)

    }catch(e){
        console.log(e)
    }

};
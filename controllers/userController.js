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

exports.getAuthUser = async (req, res) => {

    try{

        res.send(req.user)

    }catch(e){
        console.log(e)
    }

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

exports.deleteUser = async function (req, res){

    try{

        const { id } = req.params
    
        const rowDeleted = await User.destroy({ where: { id } })

        res.send({
            rowDeleted
        })

    }catch(e){
        res.send({
            error: e.message
        })
    }

}

exports.addUser = async function (req, res){

    try{

        //TODO: Необходимо сделать, что только админ может передлать role и tariff

        let { fullName, login, password, role, tariff }  = req.body

        if(!login || !password) throw new Error("Login and password can't be empty value")

        const foundedUser = await User.findOne({where: { login }})

        if(foundedUser) throw new Error("User already exist")

        password = await getPasswordHash(password)

        let users = await User.findAll({raw:true})
        if(users.length===0){
            role = 'admin'
        }

        const user = await User.create({ fullName, login, password, role, tariff })

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

        res.send(users)

    }catch(e){
        console.log(e)
    }

};
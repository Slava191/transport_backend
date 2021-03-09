const User = require("../models/user");

module.exports = class BasicController{

    constructor(Model, authUser){

        this.Model = Model
        this.authUser = authUser

    }

    async create(data){

        const newEntry = await this.Model.create({
            ...data, 
            user_id: this.authUser.id
        })

        return newEntry

    }

    async destroy(params){
        //Возвращает кол-во удаленных строк
        return await this.Model.destroy(params)
    }

    async findAll(){
        return await this.Model.findAll({
            raw:true, 
            include: [User],
            order: [
                ['id', 'DESC'],
            ],
        })
    }

}
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

    async findAll(){
        return await this.Model.findAll({raw:true})
    }

}
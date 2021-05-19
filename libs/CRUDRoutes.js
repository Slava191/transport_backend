const { user: User } = require('../sequelize').models

module.exports = (router, Model) => {

    router
        .use((req, res, next)=> {

            next()

        })
        .get("/", async function(req, res){

            const list = await Model.findAll({
                raw:true, 
                include: [User],
                order: [
                    ['id', 'DESC'],
                ],
            })

            res.send(list)

        })
        .get("/:id", async function(req, res){

            const { id } = req.params

            const entry = await Model.findByPk(id)

            res.send(entry)

        })
        .get("/oneByParam/:param/:val",  async function(req, res){

            const { param, val } = req.params

            const entry = await Model.findOne({ where: { [param]: val } });

            res.send(entry)

        })
        .post("/", async function(req, res){

            const data = req.body

            let newEntry = await Model.create({
                ...data, 
                user_id: req.user.id
            })

            newEntry = await Model.findByPk(newEntry.id, {raw:true, include: [User]})


            res.send(newEntry)

        })
        .put("/:id", async function(req, res){

            try{

                const data = req.body
                const { id } = req.params

                const { id: user_id, role } = req.user

                const whereStatement = role === 'admin' ? { id } : { id, user_id }

                const [updateRes] = await Model.update(
                    data, 
                    { where: whereStatement }
                )

                if(updateRes){
                    res.status(200).end();
                }else{
                    throw new Error("Ошибка")
                }

            }catch(err){

                res.status(400).send(err);

            }

        })
        .delete("/:id", async function(req, res){

            try{

                const { id } = req.params
                const { id: user_id, role } = req.user

                const whereStatement = role === 'admin' ? { id } : { id, user_id }

                const numOfDeletedRows = await Model.destroy({ where: whereStatement })

                if(numOfDeletedRows){
                    res.status(200).end();
                }else{
                    throw new Error("Ошибка")
                }

            }catch(err){

                res.status(400).send(err);

            }

        })

}
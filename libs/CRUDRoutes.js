module.exports = (router, CRUDClass, Model) => {

    router
        .use((req, res, next)=> {

                req.instanceOfCRUDClass = new CRUDClass(Model, req.user)
                next()

        })
        .get("/", async function(req, res){

            const list = await req.instanceOfCRUDClass.findAll()

            res.send(list)

        })
        .get("/:id", async function(req, res){

            const { id } = req.params

            const entry = await req.instanceOfCRUDClass.Model.findByPk(id)

            res.send(entry)

        })
        .post("/", async function(req, res){

            const data = req.body

            const newEntry = await req.instanceOfCRUDClass.create(data)
    
            res.send(newEntry)

        })
        .put("/", async function(req, res){

            res.send(true)

        })
        .delete("/:id", async function(req, res){

            try{

                const { id } = req.params

                const numOfDeletedRows = await req.instanceOfCRUDClass.destroy({ where: { id } })

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
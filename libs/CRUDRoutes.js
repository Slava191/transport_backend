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
        .post("/", async function(req, res){

            const data = req.body

            const newEntry = await req.instanceOfCRUDClass.create(data)
    
            res.send(newEntry)

        })
        .put("/", async function(req, res){

            res.send(true)

        })
        .delete("/", async function(req, res){

            res.send(true)

        })

}
module.exports = (router) => {

    router
        .get("/", async function(req, res){

            const list = await req.basicController.findAll()

            res.send(list)

        })
        .post("/", async function(req, res){

            const data = req.body

            const newEntry = await req.basicController.create(data)
    
            res.send(newEntry)

        })
        .put("/", async function(req, res){

            res.send(true)

        })
        .delete("/", async function(req, res){

            res.send(true)

        })

}
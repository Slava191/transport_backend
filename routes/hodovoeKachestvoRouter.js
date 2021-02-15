const express = require("express");
const hodovoeKachestvoController = require("../controllers/hodovoeKachestvoController.js");
const hodovoeKachestvoRouter = express.Router();

const HodovoeKachestvo = require("../models/hodovoeKachestvo");
const BasicController = require("../controllers/BasicController")
const basicCRUDRouter = require("./BasicCRUDRouter")

hodovoeKachestvoRouter
        .use((req, res, next)=> {

                req.basicController = new BasicController(HodovoeKachestvo, req.user)
                next()

        })
        //.get("/", hodovoeKachestvoController.getAll)
        //.post("/", hodovoeKachestvoController.add)
        
        basicCRUDRouter(hodovoeKachestvoRouter)
 
module.exports = hodovoeKachestvoRouter;
const express = require("express");
const router = express.Router();

const Gabarity = require("../models/gabarity");
const BasicController = require("../controllers/BasicController")
const basicCRUDRouter = require("./BasicCRUDRouter")

router.use((req, res, next)=> {
    req.basicController = new BasicController(Gabarity, req.user)
    next()
})

basicCRUDRouter(router)

module.exports = router;


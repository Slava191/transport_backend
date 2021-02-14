const express = require("express");
const hodovoeKachestvoController = require("../controllers/hodovoeKachestvoController.js");
const hodovoeKachestvoRouter = express.Router();

hodovoeKachestvoRouter
        .get("/", hodovoeKachestvoController.getAll)
        .post("/", hodovoeKachestvoController.add)
 
module.exports = hodovoeKachestvoRouter;
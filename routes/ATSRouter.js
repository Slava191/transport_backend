const express = require("express");
const ATSController = require("../controllers/ATSController.js");
const ATSRouter = express.Router();

ATSRouter
        .get("/", ATSController.getAllATS)
        .post("/", ATSController.addATS)
        .delete("/:id", ATSController.deleteATS)
 
module.exports = ATSRouter;
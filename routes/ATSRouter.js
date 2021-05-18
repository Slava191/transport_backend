const express = require("express");
const ATSController = require("../controllers/ATSController.js");
const ATSRouter = express.Router();

ATSRouter
        .get("/", ATSController.getAllATS)
        .get("/:id", ATSController.getOneATS)
        .post("/", ATSController.addATS)
        .put("/:id", ATSController.updateATS)
        .delete("/:id", ATSController.deleteATS)
 
module.exports = ATSRouter;
const express = require("express");
const userController = require("../controllers/userController.js");
const userRouter = express.Router();
 
userRouter
        .get("/", userController.getUsers)
        .post("/", userController.addUser)
        .post("/signin", userController.authorizeUser)

 
module.exports = userRouter;
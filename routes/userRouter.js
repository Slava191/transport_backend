const express = require("express");
const userController = require("../controllers/userController.js");
const userRouter = express.Router();
 
userRouter
        .get("/", userController.getUsers)
        .get("/auth", userController.getAuthUser)
        .post("/", userController.addUser)
        .post("/signin", userController.authorizeUser)

 
module.exports = userRouter;
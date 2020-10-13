const express = require("express");
const userController = require("../controllers/userController.js");
const userRouter = express.Router();

//TODO: Необходимо защитить роуты от несанкционированного доступа

userRouter
        .get("/", userController.getUsers)
        .get("/auth", userController.getAuthUser)
        .post("/", userController.addUser)
        .post("/signin", userController.authorizeUser)
        .delete("/:id", userController.deleteUser)

 
module.exports = userRouter;
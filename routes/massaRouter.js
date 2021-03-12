const express = require("express");
const router = express.Router();

const { massa: Model } = require('../sequelize').models

const CRUDClass = require("../libs/CRUDClass");
const CRUDRoutes = require("../libs/CRUDRoutes");

CRUDRoutes(router, CRUDClass, Model);

module.exports = router;
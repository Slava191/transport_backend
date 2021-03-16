const express = require("express");
const router = express.Router();

const { massa: Model } = require('../sequelize').models

const CRUDRoutes = require("../libs/CRUDRoutes");

CRUDRoutes(router, Model);

module.exports = router;
const express = require("express");
const router = express.Router();

const { harakteristiki_dvigatelya: Model } = require('../sequelize').models

const CRUDRoutes = require("../libs/CRUDRoutes");

CRUDRoutes(router, Model);

module.exports = router;
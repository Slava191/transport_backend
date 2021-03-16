const express = require("express");
const router = express.Router();

const { transmissiya_i_kolyosa: Model } = require('../sequelize').models

const CRUDRoutes = require("../libs/CRUDRoutes");

CRUDRoutes(router, Model);

module.exports = router;
const express = require("express");
const router = express.Router();

const { transmissiya_i_kolyosa: Model } = require('../sequelize').models

const CRUDClass = require("../libs/CRUDClass");
const CRUDRoutes = require("../libs/CRUDRoutes");

CRUDRoutes(router, CRUDClass, Model);

module.exports = router;
const express = require("express");
const router = express.Router();

const { hodovye_kachestva: HodovyeKachestva } = require('../sequelize').models

const CRUDRoutes = require("../libs/CRUDRoutes");

CRUDRoutes(router, HodovyeKachestva);

module.exports = router;
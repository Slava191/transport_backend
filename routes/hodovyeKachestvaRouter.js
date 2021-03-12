const express = require("express");
const router = express.Router();

const { hodovye_kachestva: HodovyeKachestva } = require('../sequelize').models

const CRUDClass = require("../libs/CRUDClass");
const CRUDRoutes = require("../libs/CRUDRoutes");

CRUDRoutes(router, CRUDClass, HodovyeKachestva);

module.exports = router;
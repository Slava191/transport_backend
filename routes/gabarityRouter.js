const express = require("express");
const router = express.Router();

const { gabarity: Gabarity } = require('../sequelize').models

const CRUDRoutes = require("../libs/CRUDRoutes");

CRUDRoutes(router, Gabarity);

module.exports = router;
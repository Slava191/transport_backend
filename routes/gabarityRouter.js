const express = require("express");
const router = express.Router();

const { gabarity: Gabarity } = require('../sequelize').models

const CRUDClass = require("../libs/CRUDClass");
const CRUDRoutes = require("../libs/CRUDRoutes");

CRUDRoutes(router, CRUDClass, Gabarity);

module.exports = router;
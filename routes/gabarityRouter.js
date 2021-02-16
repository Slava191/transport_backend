const express = require("express");
const router = express.Router();

const Gabarity = require("../models/gabarity");
const CRUDClass = require("../libs/CRUDClass");
const CRUDRoutes = require("../libs/CRUDRoutes");

CRUDRoutes(router, CRUDClass, Gabarity);

module.exports = router;
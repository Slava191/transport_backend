const express = require("express");
const router = express.Router();

const HodovyeKachestva = require("../models/hodovyeKachestva");
const CRUDClass = require("../libs/CRUDClass");
const CRUDRoutes = require("../libs/CRUDRoutes");

CRUDRoutes(router, CRUDClass, HodovyeKachestva);

module.exports = router;
const express = require("express");
const router = express.Router();

const Model = require("../models/informaciyaOTekhnicheskihUzlahIAgregatah");
const CRUDClass = require("../libs/CRUDClass");
const CRUDRoutes = require("../libs/CRUDRoutes");

CRUDRoutes(router, CRUDClass, Model);

module.exports = router;
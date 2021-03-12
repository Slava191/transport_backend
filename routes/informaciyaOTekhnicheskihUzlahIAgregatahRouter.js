const express = require("express");
const router = express.Router();

const { informaciya_o_tekhnicheskih_uzlah_i_agregatah: Model } = require('../sequelize').models

const CRUDClass = require("../libs/CRUDClass");
const CRUDRoutes = require("../libs/CRUDRoutes");

CRUDRoutes(router, CRUDClass, Model);

module.exports = router;
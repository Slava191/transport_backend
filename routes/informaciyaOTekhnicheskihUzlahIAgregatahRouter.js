const express = require("express");
const router = express.Router();

const { informaciya_o_tekhnicheskih_uzlah_i_agregatah: Model } = require('../sequelize').models

const CRUDRoutes = require("../libs/CRUDRoutes");

CRUDRoutes(router, Model);

module.exports = router;
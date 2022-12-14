const router = require("express").Router();
const { getblockChain } = require("../controller/cryptoController");
const cryptoModel = require("../models/cryptoModel");

router.get("/crypto",getblockChain )

module.exports = {router}
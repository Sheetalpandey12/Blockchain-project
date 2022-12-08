const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  priceUsd: String,
  symbol: String,
  name: String,
  marketCapUsd: String,
});

module.exports = new mongoose.model("Crypto", schema);



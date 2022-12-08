const router = require("express").Router();
const { getAssets } = require("../controller/cryptoController");
const cryptoModel = require("../models/cryptoModel");

router.get("/crypto", async (req,res) => {
  let data = await getAssets();

  const promises = data.map((c) => {
    return cryptoModel.findOneAndUpdate(
      { name: c.name },
      { $set: c},
      {
        upsert: true,
        new: true,
      } 
    );
  });
  Promise.all(promises).then((data) => {
    cryptoModel.deleteMany({
      _id: {
        $nin: data.map((i) => i._id),
      },
    }).then(console.log);
    res.json(data);
  });

});

module.exports = {router}
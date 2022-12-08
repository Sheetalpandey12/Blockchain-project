const express = require("express");
const mongoose = require("mongoose");
const { getAssets } = require("./controller/cryptoController");
const { router } = require("./router/route");

const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://yashrajsinh09:yashraj2727@assignment.lhpfmud.mongodb.net/Block-chain",
 {useNewUrlParser: true})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/',router)

app.use((req,res) => {
    res.status(400).send({status:false, message: 'Invalid URL'})
})

app.listen(3000, () => console.log('Express app is running on port 3000'));
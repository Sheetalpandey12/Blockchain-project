const axios = require("axios");
const url = "http://api.coincap.io/v2/assets";
const cryptoModel = require('../models/cryptoModel')

// const getblockChain = async function (req, res) {
//   try {
//       const webapi = {
//           method: "GET",
//           url: 'https://api.coincap.io/v2/assets/',
//           headers: { Authorization: "Bearer f4822a6e-7c25-4bc4-93fc-bf6cbb22a6f1" }
//       }

//       let result = await axios(webapi)
      

//       data = result.data.data
//       //sort according to growth
//       const sortdata = data.sort((a, b) => { return a.changePercent24Hr - b.changePercent24Hr });
//       console.log(sortdata)
      
//       // delete old data
//       await cryptoModel.deleteMany()
      
//       // recreate create data
//       const finaldata = await cryptoModel.create(sortdata)
      
//       final = await cryptoModel.find().select({__v:0, _id:0})

//       res.status(200).send({ status: true, data: final })

//   } catch (error) {
//       res.status(500).send({ status: false, message: error.message })
//   }
// }



const getblockChain = async function (req,res) {
    try{
         const webapi ={
            method : "GET",
            url : "https://api.coincap.io/v2/assets/",
            headers : { Authorization : "Bearer f4822a6e-7c25-4bc4-93fc-bf6cbb22a6f1"}
         }

         let result = await axios (webapi)

         data = result.data.data

         const sortdata = data.sort((a,b) => {return a.changePercent24Hr - b.changePercent24Hr});

         await cryptoModel.deleteMany()  //delete all data

         const finaldata = await cryptoModel.create(sortdata)  // create data

         const final = await cryptoModel.find().select({__v:0,_id:0})  
         return res.status(200).send({status:true, data: sortdata})
    }
    catch(err){
         return res.status(500).send({status:false, message: err.message})
    }
}























module.exports = {getblockChain}
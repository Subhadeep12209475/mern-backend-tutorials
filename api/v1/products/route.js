const express = require("express")
const {createProductController} = require("./contriller.js")
const productRouter=express.Router();

productRouter.get("/",(req,res)=>{
  res.json({
    isSuccess :true,
    message :"Productlist is reuuing",
    data :{},
  })
});
productRouter.post("/",createProductController);

module.exports={productRouter};
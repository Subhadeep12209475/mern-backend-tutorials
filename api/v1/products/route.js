const express = require("express")
const productRouter=express.Router();

productRouter.get("/",(req,res)=>{
  res.json({
    isSuccess :true,
    message :"Productlist is reuuing",
    data :{},
  })
});

module.exports={productRouter};
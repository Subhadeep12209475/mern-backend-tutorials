const express = require("express")
const {createProductController, getAllProductController} = require("./contriller.js")
const productRouter=express.Router();

productRouter.get("/",(req,res)=>{
  res.json({
    isSuccess :true,
    message :"Productlist is reuuing",
    data :{},
  })
});
productRouter.get("/",getAllProductController);
productRouter.post("/",createProductController);
productRouter.patch("/productId",updateProductController);

module.exports={productRouter};
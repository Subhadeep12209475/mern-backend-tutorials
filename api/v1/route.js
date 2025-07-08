const express = require("express");
const {productRouter}=require("./products/route.js")
const apiRouter = express.Router();
apiRouter.use("/products",productRouter);

module.exports={apiRouter};
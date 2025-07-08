const dotEnv = require("dotenv");
dotEnv.config();
const express=require("express")
const {apiRouter}=require("./api/v1/route.js");
const app = express();
app.use(express.json());

app.use((req,res,next)=>{
  console.log("====")
  console.log(req.url);
  console.log(req.method);
  console.log("-----------")
  next();
})
app.use("api/v1",apiRouter);

app.listen(2900,()=>{
  console.log("===server is running====")
})
// const dotEnv = require("dotenv")
// const express=require("express")
// const app = express();
// app.use(express.json());

// app.use((req,res,next)=>{
//   console.log("====")
//   console.log(req.url);
//   console.log(req.method);
//   console.log("-----------")
//   next();
// })
// app.get("/",(req,res)=>{
//   res.json({
//     isSuccess :true,
//     message :"server is reuuing",
//     data :{},
//   })
// })

// app.get("/hello",(req,res)=>{
//   res.json({
//     isSuccess :true,
//     Message:"Helloo",
//     data:{},
//   })
// })

// app.use((req,res,next)=>{
//   console.log("!!!!!!")
//   next();
// })

// app.listen(2900,()=>{
//   console.log("===server is running====")
// })

const dotEnv = require("dotenv");
dotEnv.config();
const express=require("express")
require("./config/db.js");
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
app.use("/api/v1",apiRouter);

app.listen(2900,()=>{
  console.log("===server is running====")
})
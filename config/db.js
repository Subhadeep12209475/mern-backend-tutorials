const mongoose=require("mongoose");
mongoose.connect(process.env.MONGO_DB_URL,{
  dbName:"day17",

})
.then(()=>{
  console.log("===db connceted===")
})
.catch((err)=>{
  console.log("db connected error");
  console.log(err.message);
  console.log("======")
})
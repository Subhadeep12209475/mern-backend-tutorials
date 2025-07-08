const createProductController = async(req,res)=>{
  try{
    const data= req.body;
    console.log("creating product...",data);
    await product.create(data);
    
    let product=null;
    try{
      product = await product.create(data);
    }catch(err){
      console.log("Error while creating product");
      res.status(400);
      res.json({
        isSuccess:false,
        message:`Err:${err.message}`,
        data:{},
      })
    }
    res.status(201);
    res.json({
      isSuccess:true,
      message:`product created`,
      data:{
        product:newProduct,
      }
    })
  }
  catch(err){
    console.log("Error in createProductController");
    res.status(501).json({
      isSuccess:false,
      message: "internal Server error",
      data:{}
    })

  }
};

module.exports={createProductController};
const {Product}= require("../../../models/product_schema.js")
const createProductController = async(req,res)=>{
  try{
    const data= req.body;
    console.log("creating product...",data);
    //await product.create(data);

    let product=null;
    try{
      product = await Product.create(data);
    }catch(err){
      console.log("Error while creating product");
      console.log(`Err ${err.message}`);
      res.status(400);  // Status code and http
      res.json({
        isSuccess:false,
        message:`Err:${err.message}`,
        data:{},
      })
      return;
    }
    res.status(201);
    res.json({
      isSuccess:true,
      message:`product created`,
      data:{
        product:product,
      }
    })
  }
  catch(err){
    console.log("Error in createProductController");
    res.status(500).json({
      isSuccess:false,
      message: "internal Server error",
      data:{}
    })

  }
};

const getAllProductController = async(req,res)=>{
  try{
    const allProduct= await Product.find();
    res.status(200).json({
      isSuccess :true,
      message:"product list fetched",
      data:{
        Product:allProduct,
      }
    })
  }catch(err){
    console.log("error in getAllProduct-->",err.message);
    res.status(500).json({
      isSuccess:false,
      message:"Inernal error"
    })
  }
}

const updateProductController=async(req,res)=>{
  try{
    const {productId}=req.params;
    const newData=req.body;
    const newProduct=await Product.findByIdAndUpdate(productId,newData);
    res.status(200).json({
      isSuccess:"true",
      message:"Product updated",
      data:{
        product:newProduct,
      }
    })

    }catch(err){
        console.log("Error is updatedcontroller-->",err.message);
        res.status(500).json({
          isSuccess:"false",
      message:"internal server error",
      data:{}
        })
    }
  }


module.exports={createProductController,getAllProductController,updateProductController};


// const {Product}= require("../../../models/product_schema.js")
// const createProductController = async (req, res) => {
//     try {
//         const data = req.body;
//         console.log("creating product...", data);

//         let newProduct = await Product.create(data);
//         res.status(201).json({
//             isSuccess: true,
//             message: `Product created`,
//             data: {
//                 product: newProduct,
//             },
//         });
//     } catch (err) {
//         if (err.name === "ValidationError" || err.code == "11000") {
//             res.status(400).json({ isSuccess: false, message: `Err: ${err.message}`, data: {} });
//         }
//         console.log("🔴 Error in createProductController");
//         res.status(501).json({ isSuccess: false, message: "Internal Server Error", data: {} });
//     }
// };

// module.exports = { createProductController };
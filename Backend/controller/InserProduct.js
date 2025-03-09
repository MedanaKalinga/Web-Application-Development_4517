const insertItemPermisstion = require("../mid/adminpermistion")
const ProducModel = require("../model/ProductModel")

async function IsnertProductController(req,res){
  try{

    const sessionUserId = req.userId

    if(!insertItemPermisstion(sessionUserId))

      throw new Error("not allows to change")

    const insertProduct = new ProducModel(req.body)

    console.log("savebody",req.body)
   const saveProduct = await insertProduct.save()

    res.status(201).json({
      message : "item add succesfuly",
      error : false,
      success : true,
     data :saveProduct

    })

  }catch(err){
    res.status(400).json({
        message : err.message || err,
        error : true,
        success : false
    })
  }
}

module.exports = IsnertProductController
  

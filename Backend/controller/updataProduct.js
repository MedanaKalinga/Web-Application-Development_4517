const insertItemPermisstion = require("../mid/adminpermistion")
const  ProducModel = require("../model/ProductModel")

async function updateItemController(req,res){
  try{

    if(!insertItemPermisstion(req.userId))

      throw new Error("not allows to change")

    const {_id, ...resbody} = req.body
   
    const updateproduct = await ProducModel.findByIdAndUpdate(_id,resbody)


    res.json({
      message : "Update Successfully",
      data : updateproduct,
      success : true,
      error : false
    })


    

  }catch(err){
    res.status(400).json({
        message : err.message || err,
        error : true,
        success : false
    })
  }
}

module.exports = updateItemController
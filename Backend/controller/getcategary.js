const ProducModel = require("../model/ProductModel")

const getCategary = async(req,res)=>{
  try{

    const productcatagery = await ProducModel.distinct("category") //get categary from the badatbasse

    const productByCategary = []                //get 1st product from the array (array to store one product from each cat)



    for(const category of productcatagery){
      const product = await ProducModel.findOne({category })

      if(product){
        productByCategary.push(product)    //no product availvle this categery check this we use this
      }
  }
     res.json({

      message : "categary-product",
      data : productByCategary,
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

module.exports = getCategary
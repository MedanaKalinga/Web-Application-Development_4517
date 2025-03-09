const { json } = require("express")
const ProducModel = require("../model/ProductModel")
const { model } = require("mongoose")

const getcategerywisproduct = async(req,res)=>{
  try{


    console.log("req",req.body)
    const {category} = req?.body || req?.query


    console.log("model",ProducModel)
    console.log("cat",category)

    const product = await ProducModel.find({category})

    

    res.json({
      data : product,
      message : "product",
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


module.exports = getcategerywisproduct
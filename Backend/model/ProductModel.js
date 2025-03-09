const mongoose = require ('mongoose')


const ProductSchema = new mongoose.Schema({



  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  isActive : Boolean,
  productName: String,
  Brand:String,
  category : String,
  image: [],
  Price: Number,
  detail: String,
 },{
  timestamps : true

})

const ProducModel = mongoose.model("product",ProductSchema )

module.exports = ProducModel
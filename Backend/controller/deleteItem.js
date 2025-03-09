// Backend: deleteItemController.js
const insertItemPermisstion = require("../mid/adminpermistion");
const ProducModel = require("../model/ProductModel");

async function deleteItemController(req, res) {
  try {
    console.log("body", req.body);

    if (!insertItemPermisstion(req.userId)) {
      throw new Error("Not allowed to delete");
    }

    const { _id } = req.body;

    const deletedProduct = await ProducModel.findByIdAndDelete(_id);

    if (!deletedProduct) {
      throw new Error("Product not found");
    }

    res.json({
      message: "Deleted Successfully",
      success: true,
      error: false,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = deleteItemController;
const express = require('express')
const router = express.Router()
const SignUpController = require('../controller/SignUp')
const SigninController = require('../controller/Signin')
const IsnertProductController = require('../controller/InserProduct')
const userDetailsController = require('../controller/UserDetails')
const authToken = require('../controller/middleware/authToken')
const getProductController = require('../controller/getproduct')
const updateItemController = require('../controller/updataProduct')
const getCategary = require('../controller/getcategary')
const getcategerywisproduct = require('../controller/getcategerywisproduct')
const deleteItemController = require("../controller/deleteItem");
const Logout = require('../controller/Logout')


router.post("/singUp",SignUpController)
router.post("/signin",SigninController)
router.get("/user-details",authToken,userDetailsController)
router.get("/logout",Logout)


router.post("/insert-item",authToken,IsnertProductController)
router.get("/get-product",getProductController)
router.put("/update-product",authToken,updateItemController )
router.get("/get-categeray",getCategary)
router.post("/product-category" ,getcategerywisproduct)


router.delete("/deleteProduct", authToken, deleteItemController);


module.exports = router
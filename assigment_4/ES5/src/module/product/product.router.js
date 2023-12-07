const router = require('express').Router()
const {allP_U ,oneProduct,addProduct,updateProduct ,deleteProduct,priceProduct,allProduct} = require("./controller/product.controller.js");

router.get('/product' , allP_U)
router.get ('/oneProduct/:id' , oneProduct)
router.post('/addproduct' , addProduct )
router.put ("/update/:id" , updateProduct)
router.delete("/delete/:id" , deleteProduct)
router.get ("/price" , priceProduct)
router.get("/allproduct" , allProduct)

module.exports = router
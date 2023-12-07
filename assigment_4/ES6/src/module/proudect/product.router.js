import { Router } from "express";
const router = Router()
import {allP_U ,oneProduct,addProduct,updateProduct ,deleteProduct,priceProduct,allProduct} from "./controller/product.controller.js";

router.get('/product' , allP_U)
router.get ('/oneProduct/:id' , oneProduct)
router.post('/addproduct' , addProduct )
router.put ("/update/:id" , updateProduct)
router.delete("/delete/:id" , deleteProduct)
router.get ("/price" , priceProduct)
router.get("/allproduct" , allProduct)

export default router
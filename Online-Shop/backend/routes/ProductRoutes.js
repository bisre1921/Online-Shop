import express from "express";
// import products from "../data/products.js"
import Product from "../models/ProductModel.js";
import AsyncHandler from "../middleware/AsyncHandler.js";

const router = express.Router();

router.get("/" , AsyncHandler(async(req , res) => {
    const products = await Product.find({});
    res.json(products);
}));

router.get("/:id" , AsyncHandler(async(req , res) => {
    const product = await Product.findById(req.params.id);

    if(product){
       return res.json(product);
    }else{
        res.status(404).json({message : "Product not found"});
    }

}));

export default router;
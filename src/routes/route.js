const express=require('express');
const route =express.Router();
const controllerProd=require('../controllers/controller');


route.get("/",controllerProd.getAll);

route.get("/:id",controllerProd.getProductById);

route.put("/:id",controllerProd.updateProduct);

 route.post("/",controllerProd.addProduct);

 route.delete("/:id",controllerProd.deleteProductById);

module.exports=route;
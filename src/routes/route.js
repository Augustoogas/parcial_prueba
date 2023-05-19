const express=require('express');
const route =express.Router();
const controllerProd=require('../controllers/controller');


route.get("/",controllerProd.getAll);
route.get("/:id",controllerProd.getProductById);

// route.put();

// route.post();

// route.delete();

module.exports=route;
const productos=require('../../datos/productos.json');

const getAll = (req,res)=>{
    res.status(200).json(productos);
}


const getProductById=(req,res)=>{
    const id=req.params.id;

    const prodSolicitado = productos.findIndex( e =>e.idProducto == id );

    if(prodSolicitado=>0){
        res.status(200).json(productos[prodSolicitado]);
    }else{
        res.status(404).json({mensaje:'No se encontro el producto'});
    }

}









module.exports={getAll,getProductById};
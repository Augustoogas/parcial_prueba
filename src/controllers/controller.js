const productos=require('../../datos/productos.json');

const getAll = (req,res)=>{
    res.status(200).json(productos);
}


const getProductById=(req,res)=>{
    const id=req.params.id;

    const prodSolicitado = productos.findIndex( e =>e.idProducto == id );

    if(prodSolicitado >=0){
        res.status(200).json(productos[prodSolicitado]);
    }else{
        res.status(404).json({mensaje:'No se encontro el producto'});
    }

}

const addProduct = (req,res)=>{
    const datosBody=req.body;
    const existe=productos.find(p => p.descripcion == datosBody.descripcion);
    if(existe){
        res.status(400).json({Mensaje:"un producto con la misma descripcion ya existe"});
    }else{
        if(!datosBody.descripcion && (datosBody.idTipoProducto<=0 || !datosBody.idTipoProducto )){
            res.status(400).json({Mensaje:"Ingrese correctamente los datos"});
        }
        else{
        productosIds=productos.map(p => p.idProducto);
        maxId=Math.max(...productosIds)+1;

        const prod={
            idProducto:maxId,
            descripcion:datosBody.descripcion,
            stock:datosBody.stock,
            idTipoProducto:datosBody.idTipoProducto
        }

        productos.push(prod);

        res.status(201).json(prod);
    
        }
    
    }
}

const deleteProductById = (req,res)=>{
        const id=req.params.id;

        const prod = productos.findIndex(e => e.idProducto==id);

        if(prod >=0){

            productos.splice(prod,1);
            res.status(200).json({mensaje:`El producto $(productos[prodSolicitado])fue borrado exitosamente`});
        }
        else{
            res.status(404).json({mensaje:'No se encontro el producto'});
        }

    }




    const updateProduct=(req,res)=>{
        const id=req.params.id
        const datUpdate=req.body;

        const indice=productos.findIndex(p => p.idProducto == id);
        
        if(indice >=0){
            productos[indice].descripcion=datUpdate.descripcion;
            productos[indice].stock=datUpdate.stock;
            productos[indice].idTipoProducto=datUpdate.idTipoProducto;
            
            res.status(201).json({"producto": productos[indice]});
        }else{
            res.status(404).
        json(
            {
                resultado: "La operación de modicar no pudo ser realizada",
                mensaje: `El producto con id ${id} no fue encontrado`
            }
        )
    }
}
     





module.exports={getAll,getProductById,deleteProductById,addProduct,updateProduct};
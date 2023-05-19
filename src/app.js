const express=require('express');
const PORT=process.env.PORT||3001;
const app=express();
const ruta=require('./routes/route');


app.use(express.json());
app.use("/productos",ruta);

app.listen(PORT,()=>{console.log(`la app esta escuchando en el puerto ${PORT}`)});


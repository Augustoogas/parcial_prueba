const express=require('express');
const PORT=process.env.PORT||3001;
const app=express();
const ruta=require('./route/route.js');


app.use(express.json());
app.use("/",ruta);

app.listen(PORT,()=>{console.log(`la app esta escuchando en el puerto ${PORT}`)});


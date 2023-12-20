//servidor
const express= require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000
const Cancion = require('./models/model');
const router = require('./router');


app.use(express.json());


//Conectar MongoDB
mongoose.connect('mongodb+srv://bdiaz:unodostres@clusterr.xffnu0h.mongodb.net/',{
    
})
.then(()=>{
    console.log('Conexion exitosa')
})
.catch((err) =>{
    console.error('error al conectar el servidor :'+err) 
});
app.use('/', router);



app.listen(port, () => {
    console.log('el servidor corre en el puerto 3000');
});
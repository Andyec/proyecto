//Importamos las depedencias
const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');

//Creamos una constante para el puerto
const PUERTO = process.env.PORT || 3001;

//Empleamos las rutas
let pintoresRouter = require('./routes/pintor');

//Sitio web y hbs

const app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

//Vamos a decir la ruta que emplear
app.use('/', pintoresRouter);

/*La conexión con Mongo*/
mongoose.Promise = global.Promise;
const cadena = 'mongodb+srv://AndyEspino:kurokotetsu@cluster0-8axaq.mongodb.net/<dbname>?retryWrites=true&w=majority';
mongoose.connect(cadena, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Conexión establecida con éxito');
}).catch(err=> console.log(err));

/*Arrancamos el servidor*/
app.listen(PUERTO, ()=>{
    console.log('Escuchando el puerto 3001');
});

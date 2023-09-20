/*
datos que tomamos del proceso de confirguraciÃ³n de la base de datos online MongoDB Altas
*/
// mongodb+srv://dBuser1:<password>@cluster0.schfn.mongodb.net/?retryWrites=true&w=majority


const express = require('express'); // carga el módulo Express
const mongoose = require('mongoose'); // carga el módulo Mongoose
const Meeting = require('./models/meeting'); // carga el esquema de Mongoose que generamos en la carpeta "models"
const dotenv = require('dotenv').config() // Cargo el módulo para usar variables de entorno
const cors = require('cors') // Cargo el módulo para permitir conexiones desde el frontend

const app = express(); // instancia nuetra app
app.use(cors()) // Hago que la aplicación use cors
/*
usa el método .conect() de Mongoose
para conectarse a nuestra base de datos online MongoDB Altas,
pasándole como parámetro el string que nos dió la misma cuando la configuramos,
al elegir el método de conexión. Ese método .conect() devuelve una Promesa/Promise
que resolvemos con la función .then() (... y .catch() para los posibles errores)
*/
mongoose.connect(process.env.MONGO_CONNECTION_STRING) // Utilizo una variable de entorno para no exponer mi string de conexión a la BD
    .then(() => {
        console.log('Conectados a MongoDB Atlas!');
    })
    .catch((error) => {
        console.log('FALLA al conectarse a MongoDB Atlas!');
        console.error(error);
    });

app.use(express.json()) // para parsear como JSON el cuerpo de nuestra solicitud, y la respuesta

const calenRoutes = require('./rutas/calendario');

app.use('/api/v1/meetings', calenRoutes);

// app.post('/api/v1/meetings', );

// app.put('/api/v1/meetings);


// app.delete('/api/v1/meetings);

  
// app.get('/api/v1/meetings);



// app.get('/api/v1/meetings', );


module.exports = app; // exportamos nuestra app para poder tomarla en el server


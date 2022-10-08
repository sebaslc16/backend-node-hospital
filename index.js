//Importaciones en node
const express = require('express');

// Busca por defecto un archivo .env y lo configura y añade a las variables
// de node
require('dotenv').config();

// Configuración de cors
const cors = require('cors');

//Desestructuracion para extraer los componentes que se necesiten
const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();

// use() funciona como middleware para ejecutarlo cada vez que el
// codigo pase por esta sección
app.use( cors() );

// Base de datos
dbConnection();

// process.env permite ver y acceder a todas las variables de node
// console.log( process.env );

// Rutas y endpoints
app.get( '/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola Mundo'
    });
});

// Levantar servidor express
app.listen( process.env.PORT, () => {
    console.log('Servidor corriendo en puerto '+process.env.PORT);
});

// Con nodemon se actualizara automaticamente cuando se realicen cambios
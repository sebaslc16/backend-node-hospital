const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        // Se hace uso de la variable de entorno para establecer la conexion
        // a la base de datos
        await mongoose.connect(process.env.DB_CNN);
        console.log('DB online');
    } catch (error) {
        console.log(error);
        throw new Error("Error al levantar la BD");
    }
}

//exportas funcion para usarlo fuera del modulo
module.exports = {
    dbConnection
}
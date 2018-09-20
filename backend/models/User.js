var mongoose = require('mongoose')

//Exportar los Modelos de Usuario (el primer parametro es el nombre del modelo) y el segundo sera el esquema del objeto
module.exports = mongoose.model('User', {
    email: String,
    pwd: String
});
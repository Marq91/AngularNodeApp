var express = require('express')
var cors = require('cors')
var app = express()


//Enviando objeto simulado
var posts = [
    {message: 'hello'},
    {message: 'hi'}
]
//Ahora le diremos a express que utilice midleware
app.use(cors())

//Crear una ruta de get(obtencion) para agregar publicaciones(posts)
app.get('/posts', (req, res) => {
    //Enviar respuesta hola mundo
    res.send(posts)
})

app.listen(3000)

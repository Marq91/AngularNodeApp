var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()

//Enviando objeto simulado
var posts = [
    {message: 'hello'},
    {message: 'hi'}
]
//Ahora le diremos a express que utilice midleware
app.use(cors())
app.use(bodyParser.json())

//Crear una ruta de get(obtencion) para agregar publicaciones(posts)
app.get('/posts', (req, res) => {
    //Enviar respuesta hola mundo
    res.send(posts)
    console.log("server up!! ")
})

app.post('/register', (req, res) => {
    //Para mas seguridad deberia haber una condicion para validar en caso de q angular tenga problemas
    var userData = req.body;
    console.log(userData.email);
    //console.log(userData.password);
    //para q postman no este esperando enviaremos status 200 "ok"
    res.sendStatus(200)
})

app.listen(3000)

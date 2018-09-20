var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var app = express()
//Importar modelos de usuario
var User = require('./models/User.js')

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

    var user = new User()
    user.save((err, result) => {
        if(err)
            console.log('saving user error')
        //Si no hay error enviaremos estado 200
        res.sendStatus(200)
    })
    console.log('El backend recibio los sgtes datos desde el front: ');
    console.log('email: ' + userData.email); //Esto sirve para verifivar si los datos llegan atraves de consola realizando una prueba con Postman.
    console.log('paswword: '+ userData.pwd);
    //para q postman no este esperando enviaremos status 200 "ok"
    
})

//Verificar si el user esta creado para su logeo
app.post('/login', async(req, res) => {
    var userData = req.body;

    var user = await User.findOne({email: userData.email})

    console.log(user)
    res.sendStatus(200)
})

//Si recibimos mensaje q comienza con:'(node:16784) DeprecationWarning:...is deprecated' sedebe agregar otro parametro
mongoose.connect('mongodb://test:test123456@ds261302.mlab.com:61302/pssocial',  { useNewUrlParser: true } , (err) => {
    if(!err)
        console.log('connected to mongo!')
})

app.listen(3000)

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const mongoose = require('mongoose')

const PacienteRoutes = require("./routes/paciente-routes")
const HospitalRoutes = require("./routes/hospital-routes")

app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))

var myLogger = (req, res, next)=>{
    console.log('LOGGED')
    next()
}

var requestTime = (req, res, next)=>{
    req.requestTime = {"Time": Date.now()}
    next()
}

app.use(myLogger)
app.use(requestTime)

app.use(HospitalRoutes)
app.use(PacienteRoutes)

app.listen(port, function(){
    // const response = 'Server rodando em http://localhost:'+port+'/';
    console.log('Server rodando em http://localhost:'+port+'/');
})

//Conexão com Banco de Dados Mongo
mongoose.connect('mongodb+srv://Admin:branco.2020@cluster0-tu1dt.mongodb.net/bd_apihospital?retryWrites=true&w=majority',
{
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

var db = mongoose.connection;
db.on('error',console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log('MongoDB Conectado!')
})
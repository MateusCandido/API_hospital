const mongoose = require('mongoose')
const Paciente = require('../domain/paciente-domain')

//Constroi a estrutura da colletion
const PacienteSchema = mongoose.Schema({
    CPF: String,
    nomeP: String,
    idade: String,
    sexo: String,
    hospital: String,
    idHospital: String
    //dataCadastro: Date
})

//Objeto que contém os dados
PacienteSchema.loadClass(Paciente)
module.exports = mongoose.model('Paciente', PacienteSchema)
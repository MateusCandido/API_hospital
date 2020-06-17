const mongoose = require('mongoose')
const Hospital = require('../domain/hospital-domain')

//Constroi a estrutura da colletion
const HospitalSchema = mongoose.Schema({
    nomeH: String,
    numLeitos: String,
    //dataCadastro: Date
})

//Objeto que contém os dados
HospitalSchema.loadClass(Hospital)
module.exports = mongoose.model('Hospital', HospitalSchema)
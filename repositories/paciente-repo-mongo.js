const mongoose = require('mongoose')
const PacienteModel = require('../model/paciente-model')

class PacienteRepositoryMongo{

    constructor(){
        this.model = PacienteModel
    }

    add(paciente){
        this.model.create(paciente, function(err,suc){
            if(err){
                return console.log('Falha ao cadastrar paciente');
                
            }else{
                return console.log('Paciente cadastrado com sucesso!')
            } 
        })
    }
    
    getAll(){
        const query = this.model.find({});
        const promise = query.exec();
        return promise;
    }

}
module.exports = PacienteRepositoryMongo
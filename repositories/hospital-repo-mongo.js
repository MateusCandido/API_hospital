const mongoose = require('mongoose')
const HospitalModel = require('../model/hospital-model')

class HospitalRepositoryMongo{

    constructor(){
        this.model = HospitalModel
    }

    add(hospital){
        this.model.create(hospital, function(err,suc){
            if(err){
                return console.log('Falha ao cadastrar hospital');
            }else{
                return console.log('Hospital cadastrado com sucesso!')
            } 
        })
    }
    
    getAll(){
        const query = this.model.find({});
        const promise = query.exec();
        return promise;
    }

}
module.exports = HospitalRepositoryMongo
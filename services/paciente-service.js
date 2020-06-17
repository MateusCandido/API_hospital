const PacienteRepositoryArray = require('../repositories/paciente-repo-array');
const PacienteRepositoryMongo = require('../repositories/paciente-repo-mongo');

class PacienteService{
    constructor(){
        //Array
        //this.pacienteRepository = new PacienteRepositoryArray()
        //Mongo
        this.pacienteRepository = new PacienteRepositoryMongo()
    }

    add(paciente){
        this.pacienteRepository.add(paciente)
    }
    
    getAll(){
        return this.pacienteRepository.getAll();
    }

}
module.exports = PacienteService
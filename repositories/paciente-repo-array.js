class PacienteRepositoryArray{
    constructor(){
        this.pacientes = []
    }

    add(paciente){
        this.pacientes.push(paciente)
    }
    
    getAll(){
        return this.pacientes;
    }

}
module.exports = PacienteRepositoryArray
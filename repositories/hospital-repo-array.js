class HospitalRepositoryArray{
    constructor(){
        this.hospitais = []
    }

    add(hospital){
        this.hospitais.push(hospital)
    }
    
    getAll(){
        return this.hospitais;
    }

}
module.exports = HospitalRepositoryArray
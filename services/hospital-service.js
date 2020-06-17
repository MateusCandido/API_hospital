const HospitalRepositoryArray = require("../repositories/hospital-repo-array");
const HospitalRepositoryMongo = require("../repositories/hospital-repo-mongo");

class HospitalService{
    constructor(){
        //Array
        //this.hospitalRepository = new HospitalRepositoryArray()
        //Mongo
        this.hospitalRepository = new HospitalRepositoryMongo()
    }

    add(hospital){
        this.hospitalRepository.add(hospital)
    }
    
    getAll(){
        return this.hospitalRepository.getAll();
    }

}
module.exports = HospitalService
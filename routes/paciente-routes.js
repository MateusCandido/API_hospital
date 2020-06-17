const Paciente = require("../domain/paciente-domain")
const  PacienteService = require("../services/paciente-service")
var pacienteService = new PacienteService()

const express = require('express')
var router = express.Router()



router.get("/paciente", async(req, res)=>{
    const pacientes = await pacienteService.getAll();
    res.json(pacientes);
})
//Adiciona um novo paciente
router.post("/paciente", (req, res)=>{

    //let p = new Paciente(req.body.CPF,req.body.nomeP,req.body.idade,req.body.sexo,req.body.hospital,req.requestTime);
    let p = new Paciente(req.body.CPF,req.body.nomeP,req.body.idade,req.body.sexo,req.body.hospital,req.body.idHospital);
    pacienteService.add(p)
    res.json(p);

})

module.exports = router
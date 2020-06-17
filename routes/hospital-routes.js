const Hospital = require("../domain/hospital-domain")
const  HospitalService = require("../services/hospital-service")
var hospitalService = new HospitalService()

const express = require('express')
var router = express.Router()

router.get("/hospital", async(req, res)=>{
    const hospitais = await hospitalService.getAll();
    res.json(hospitais);
})
//Adiciona um novo hospital
router.post("/hospital", (req, res)=>{

    //let h = new Hospital(req.body.nomeH,req.body.numLeitos,req.requestTime);
    let h = new Hospital(req.body.nomeH,req.body.numLeitos);
    hospitalService.add(h)
    res.json(h);

})

module.exports = router
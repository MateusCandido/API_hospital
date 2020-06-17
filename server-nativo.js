const http = require('http');

const hostname = 'localhost';
const port = 3000;

const fs = require('fs');
const path = require('path');


const server = http.createServer((req, res) => {
  if(req.url=="/api/banana"){
    res.end(JSON.stringify({titulo:'Banana'}))
  }else if(req.url === "/"){
    //Carrega Cadastro Hospital
    const home = path.join(__dirname,'public','cad-hospital.html');

    fs.readFile(home,(err, data) => {
      if (err) throw err;
      //console.log(data);
      res.end(data);
    });

  }else if(req.url === "/cad-paciente"){
    //Carrega Cadastro Paciente
    const home = path.join(__dirname,'public','cad-paciente.html');

    fs.readFile(home,(err, data) => {
      if (err) throw err;
      //console.log(data);
      res.end(data);
    });
  }else{
    const file = path.join(__dirname,'public',req.url);

    fs.readFile(file, (err, data) => {
      if (err) console.dir(err);
      res.end(data)
    });
  }
  
  
  //console.log(req.url)
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
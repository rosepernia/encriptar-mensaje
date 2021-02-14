const express = require('express')
const rtMain = express.Router()
const daoCitas = require('../dao/daoCitas')
//aqui te creas las rutas get, post, etc.. que necesies

//aquí llamo a las funciones de arriba:


/* 
daoCitas.nombrePepe("Pepe Sanchez")
    .then(algunas => console.log(algunas))
    .catch(err => console.log(err))
    .finally(console.log("promesa finalizada"))

daoCitas.getCita()
    .then(cita => console.log(cita))
    .catch(err => console.log(err))
    .finally(console.log("promesa finalizada"))

daoCitas.getCitas()
    .then(todas => console.log(todas))
    .catch(err => console.log(err))
    .finally(console.log("promesa finalizada"))

console.log("Proceso finalizado")
 */

rtMain.get('/', function (req, res) {
    res.render('home')
}) 

rtMain.get('/cita/:id', (req, res)=>{
    let cita=getCita(req.params.id)
    daoCitas.getCita(id)
    .then(cita=>{
        res.render('vercita',{cita:cita}) 
    })
    .catch(err=>{
        res.render('error',{error:err})
    })
}) 






//Recorremos array citas para ver si se repite fecha
/*   let existe = false
  citas.forEach(citaC => {
    if (cita.fecha == citaC.fecha && cita.hora == citaC.hora) existe = true
  }) */






module.exports = rtMain
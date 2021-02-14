const express = require('express')
const rtMensajes = express.Router()
const Mensaje=require('../models/Mensaje')

//aquí respondemos a una petición asíncrona hecha con AJAX
rtMensajes.post('/procesar',(req,res)=>{
    let mensaje=new Mensaje(req.body.mensaje)
    console.log(mensaje)
    //let mensajeEncriptado=mensaje.encriptar()
    //por lo que no necesitaremos renderizar las vistas en la respuesta
    //sino que devolveremos una respuesta en formato json
    

    res.json({mensaje:mensaje.encriptar()})
})

rtMensajes.post('/desencriptar',(req,res)=>{
    let mensaje=new Mensaje(req.body.mensaje)
    console.log(mensaje)
    //let mensajeEncriptado=mensaje.encriptar()
    //por lo que no necesitaremos renderizar las vistas en la respuesta
    //sino que devolveremos una respuesta en formato json
    

    res.json({mensaje:mensaje.desencriptar()})
})







module.exports=rtMensajes
const { get } = require("../routes/rtMain")


module.exports = class Mensaje {

    //constructor
    constructor(texto) {
        this.texto = texto
        this.textoEncriptado = this.encriptar()
    }

    //métodos getter y setter
    //esto devuelve el valor del texto que introduzcamos 
    getTexto() {
        return this.texto
    }
    //esto nos permite enviar diferentes contenido (texto=manzana)
    setTexto(texto) {
        this.texto = texto

    }
    //métodos privados
    encriptar() {
        let letras = this.texto

        letras = letras.replace(/a/ig, ":")
        letras = letras.replace(/e/ig, "=")
        letras = letras.replace(/i/ig, "&")
        letras = letras.replace(/o/ig, ";")
        letras = letras.replace(/u/ig, "%")


        return letras

    }

    desencriptar() {
        let simbolos = this.textoEncriptado

        simbolos = simbolos.replace(/:/ig, "a")
        simbolos = simbolos.replace(/=/ig, "e")
        simbolos = simbolos.replace(/&/ig, "i")
        simbolos = simbolos.replace(/;/ig, "o")
        simbolos = simbolos.replace(/%/ig, "u")

        return simbolos

    }
    validar() {
        textoVal = this.texto
        if (textoVal.length > 200)
            return "esto valida el texto del mensaje"
    }


}






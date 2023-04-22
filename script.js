var areaTexto = document.getElementById("areaTexto");
var areaResultado = document.getElementById("areaResultado");
var botonEncriptar = document.getElementById("botonEncriptar");
var botonDesencriptar = document.getElementById("botonDesencriptar");
var botonCopiar = document.getElementById("botonCopiar");
var botonBorrarAT = document.getElementById("botonBorrarAT");
var botonBorrarR = document.getElementsByName("botonBorrarR");

function encriptar(textoUsuario){
    let textoEncriptado = textoUsuario.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");
    console.log(textoEncriptado)
    return textoEncriptado; 
}

encriptar("dragon perro caballo animal abuelo");
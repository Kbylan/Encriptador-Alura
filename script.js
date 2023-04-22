// Traemos todos los botones y las areas de texto al js
var areaTexto = document.getElementById("areaTexto");
var areaResultado = document.getElementById("areaResultado");
var botonEncriptar = document.getElementById("botonEncriptar");
var botonDesencriptar = document.getElementById("botonDesencriptar");
var botonCopiar = document.getElementById("botonCopiar");
var botonBorrarAT = document.getElementById("botonBorrarAT");
var botonBorrarR = document.getElementById("botonBorrarR");
// -----------------------

//Funciones Encriptar y Desencriptar
function encriptar(textoUsuario){
    let textoEncriptado = textoUsuario.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");
    return textoEncriptado; 
}

function desencriptar(textoEncriptado){
    let textoDesencriptado = textoEncriptado.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");
    return textoDesencriptado;
}
//--------

//Funcionalidades de los botones
botonEncriptar.addEventListener("click", function(){ 
    let textoUsuario = areaTexto.value; // Ponemos el texto escrito por el usuario en una variable
    let textoEncriptado = encriptar(textoUsuario);
    areaResultado.value = textoEncriptado; //Enviamos directamente el texto encriptado al area de resultado 
});

botonDesencriptar.addEventListener("click", function(){
    let textoEncriptado = areaTexto.value;
    let textoDesencriptado = desencriptar(textoEncriptado);
    areaResultado.value = textoDesencriptado; //Todos los resultados van hacia el area de resultados
});

botonBorrarAT.addEventListener("click", function(){
    areaTexto.value = "";
    areaTexto.focus(); //regresamos el focus al area de texto para seguir ecribiendo
});

botonBorrarR.addEventListener("click", function(){
    areaResultado.value = "";
});

botonCopiar.addEventListener("click", function(){
    let textoCopiar = areaResultado.value; //Obetemos el valor ahora del area de resultados
    navigator.clipboard.writeText(textoCopiar); //Copiamos el contenido de la variable al portapapeles
    alert("El texto se ha copiado al portapapeles"); // lanzamos una alerta al usuario para informarle
});

const entrada = document.getElementById('texto');
const encriptar = document.getElementById('btn-encriptar');
const desencriptar = document.getElementById('btn-desencriptar');
const respuesta = document.getElementById('areaRes');
const imagenFondo = document.getElementById('areaRes');
const mensajes = document.getElementsByClassName('Mensajes');
const copiar = document.getElementById('btn-copiar');

encriptar.addEventListener('click', encriptado);
desencriptar.addEventListener('click', desencriptado);

function encriptado() {
    var text = lowercase.entrada.textContent;
    text=text.replace(/e/g,"enter");
    text=text.replace(/i/g,"imes");
    text=text.replace(/a/,"ae");
    text=text.replace(/o/g,"ober");
    text=text.replace(/u/g,"ufat");
    var resultElement=document.getElementById('areaRes');
    resultElement.textContent=text;
    for (const message of mensajes){
        message.style.display='none';
        imagenFondo.style.backgroundImage='none';
    }
}

function desencriptado() {
    var text = entrada.textContent;
    text=text.replace(/enter/g,"e");
    text=text.replace(/imes/g,"i");
    text=text.replace(/ae/,"a");
    text=text.replace(/ober/g,"o");
    text=text.replace(/ufat/g,"u");
    var resultElement=document.getElementById('areaRes');
    resultElement.textContent=text;
    for (const message of mensajes){
        message.style.display='none';
        imagenFondo.style.backgroundImage='none';
    }
}

copiar.addEventListener('click',() =>{
    respuesta.select();
    document.execCommand('copy');
});
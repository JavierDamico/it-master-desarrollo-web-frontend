//Datos
//Variables y/o constantes
// se componen de Tipo de dato y dato

//Tipo de dato Undefined
var nombre

//tipo de dato string
//todo lo que este entre comillas es un string incluso numeros
var primerNombre ='Javier'
var segundoNombre = 'Omar'
var apellido = 'DAmico'

//Concatenar
var nombreCompleto = primerNombre + ' ' + segundoNombre + ' ' + apellido

var cantidadDeLetras = nombreCompleto.length

console.log(cantidadDeLetras)





//Tipo de dato number
var edad = 39

var altura = 1.75 //se usa punto para los decimales


// Tip de dato boolean (fales, true)
var esExtranjero = false

var esMayorDeEdad = edad > 17


if (esMayorDeEdad) {
    console.log('Puedes acceder al sitio')
} else {
    console.log('Te redirigiremos a otra pagina...')
}

//Logica / Condiciones
// se usa == para comparar valores
if ( esExtranjero == true) {
    console.log('Bienvenido a nuestro pais')
} else {
    console.log('Hola compatriota')
}


//Eventos
//es algo que va a pasar despues pero que tengo que indicarlo

var cartelCookie = document.querySelector('.cookie')

var aceptar = document.querySelector('.cookie a') //busco el elemento que quiro que ejecute el evento

var mostrarMensaje = false

if (mostrarMensaje) {
    cartelCookie.style.display = 'none'
}

aceptar.addEventListener('click', function () {
    cartelCookie.style.display = 'none'
})

// document.querySelector('.cookie').style.display = 'none'



//Envio de email

var botonDeEnviar = document.querySelector('#footer form button')

botonDeEnviar.addEventListener('click', function(){
    botonDeEnviar.parentElement.remove()
    
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Hemos recibido la suscripcion'
    document.querySelector('#footer').appendChild(parrafo)


})

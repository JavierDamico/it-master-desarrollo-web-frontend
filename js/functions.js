// nombre
// argumentos
// bloque de codigo
// resultado

/* function sumar(a = 0, b = 0) { //inicializo los arg para que no de NaN
    var resultado = a + b;
    console.log(resultado);
}


function nombreCompleto(primerNombre, segundoNombre, apellido) {
    var dato = primerNombre + ' ' + segundoNombre + ' ' + apellido
    console.log(dato)
}

sumar(6, 8)

nombreCompleto('Javier', 'Damico') */

var calculadora = {
  resultado: 0,

  sumar(a = 0, b = 0) { //los parametros se igualan a 0 en el caso de que no se pasen 1 o ambos como datos para que la funcion no devuelva NaN.
    this.resultado += a + b;
  },

  restar(a = 0, b = 0) {
    this.resultado -= a - b;
  },

  obtenerResultado() {
    return this.resultado;
  },

  resetear() {
    return (this.resultado = 0);
  },
};

calculadora.resultado = 567890;
calculadora.restar(234);
calculadora.sumar(45);
calculadora.sumar(92);

console.log(calculadora.obtenerResultado());

calculadora.resetear();

console.log(calculadora.obtenerResultado());

function nombreCompleto(primerNombre, segundoNombre, apellido) {
  var resultado = primerNombre;

  if (segundoNombre != "") {
    resultado += " " + segundoNombre;
  }

  return resultado + " " + apellido;
}
//ejecutar
var resultadoSuma = calculadora.sumar(6, 8);
//calculadora.sumar()
console.log(resultadoSuma);

var usuario = nombreCompleto("Javier", "Omar", "Damico");
console.log(usuario);

var profesor = nombreCompleto("Cosme", "", "Fulanito");
console.log(profesor);

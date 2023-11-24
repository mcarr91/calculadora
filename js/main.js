const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('.btn');
const boton_operadores = document.querySelectorAll('.operador');
const botonC = document.getElementById('c');
const boton_borrar = document.getElementById('borrar');
const boton_igual = document.getElementById('igual');
// -------------------------------------------------------------------------------
function agregar_numero_pantalla(valor) {
  if (pantalla.textContent === '0') {
    pantalla.textContent = '';
  }
  pantalla.textContent += valor;
}
botones.forEach(boton => {
  boton.addEventListener('click', () => {
    agregar_numero_pantalla(boton.textContent);
  });
});
function agregar_operador(operador) {
  if (pantalla.textContent !== '0' && !es_operador(pantalla.textContent.slice(-1))) {
    pantalla.textContent += operador;
  }
}
boton_operadores.forEach(boton => {
  boton.addEventListener('click', () => {
    agregar_operador(boton.textContent);
  });
});
// ---------------------------------------------------------------------------------
function limpiar_pantalla() {
  pantalla.textContent = '0';
}
function borrar_ultimo_caracter() {
  op = pantalla.textContent.slice(0, -1);
  pantalla.textContent=op
}
function es_operador(caracter) {
  return caracter === '+' || caracter === '-' || caracter === '*' || caracter === '/';
}
botonC.addEventListener('click', limpiar_pantalla);
boton_borrar.addEventListener('click', borrar_ultimo_caracter);
boton_igual.addEventListener('click', realizar_calculo);
// -----------------------------------------------------------------------------------
function realizar_operacion(operando1, operador, operando2) {
  switch (operador) {
    case '+':
      return operando1 + operando2;
    case '-':
      return operando1 - operando2;
    case '*':
      return operando1 * operando2;
    case '/':
      return operando1 / operando2;
    default:
      return 0;
  }
}
function realizar_calculo() {
  const expresion = pantalla.textContent;
  const operadores = expresion.match(/[+\-*/]/g);
  const numeros = expresion.split(/[+\-*/]/g).map(parseFloat);

  let resultado = numeros[0];
  for (let i = 0; i < operadores.length; i++) {
    const operador = operadores[i];
    const numero = numeros[i + 1];
    resultado = realizar_operacion(resultado, operador, numero);
  }
  pantalla.textContent = resultado;
}
// -----------------------------------------------------------------------------------
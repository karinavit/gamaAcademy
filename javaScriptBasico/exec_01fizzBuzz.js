/*
FizzBuzz
Se entrada for divisível por 3 imprimir 'Fizz'
Se entrada for divisível por 5 imprimir 'Buzz'
Se entrada for divisível por 3 e 5 imprimir 'FizzBuzz'
Se entrada não for um número imprimir 'Não é um número'
Se entrada não for divisível por 3 nem por 5 imprimir 'O valor da entrada'
*/

let resultado = fizzBuzz(15);
console.log(resultado);

function fizzBuzz(entrada) {
  if (typeof entrada !== 'number') {
    return 'Não é um número';
  }
  if ((entrada % 3 === 0) && (entrada % 5 === 0)) {
    return 'FizzBuzz'
  }
  if (entrada % 3 === 0) {
    return 'Fizz';
  }
  if (entrada % 5 === 0) {
    return 'Buzz';
  }
  return entrada;  
}
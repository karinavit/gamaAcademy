// Verificação Simples:

// var num = 1;
// var num = 5;

// if (num === 1) {
//   console.log("num é igual a 1")
// } else {
//   console.log("num é igual a 5")
// }

// verificação com else if
var num = 1;
var num = 5;

if (num === 1) {
  console.log("num é igual a 1")
} else if (num === 2) {
  console.log("num é igual a 2")
} else {
  console.log("num é 5")
}

//switch case
var mes = "janeiro";

switch (mes) {
  case "fevereiro":
    console.log("mes 2");
    break;
  case "março":
    console.log("mes 3");
    break
  case "janeiro":
    console.log("mes 1");
    break
  
  default:
    console.log("nenhum dos caos atendidos")
}

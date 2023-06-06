// 1)Verificar se um número é positivo, negativo ou zero:

let num = 2;

if (num < 3) {
  console.log("esse numero é menor");
} else if (num === 0) {
  console.log("esse numero é zero");
} else {
  console.log("esse numero é maior");
}
// 2)Verificar se um número é maior, menor ou igual a outro número:

let num1 = 10;
let num2 = 15;

if (num1 === num2) {
  console.log("esse numero igual");
} else if (num1 < num2) {
  console.log("o numero 1 é menor");
} else {
  console.log("esse numero 1 é maior");
}
// 3)Verificar se um número é um múltiplo de 3:

let num4 = 9;
if (num4 % 3 === 0) {
  console.log("o numero é multiplo de 3");
} else {
  console.log("o numero não é multiplo de 3");
}
// 4)Verificar se um número é divisível por outro número:
let num5 = 7;
let num6 = 5;

if ((num5 / num6) % 2 === 0) {
  console.log("o numero é divisivel por ele mesmo sem resto");
} else {
  console.log("o numero não tem divisão sem resto");
}

//5) Verificar se é um quadrado ou retangulo:
let altura = 200;
let largura = 200;

if (altura === largura) {
  console.log("o numero é um quadrado");
} else {
  console.log("o numero é um retangulo");
}

//6) Verificar se uma pessoa é adolescente, adulto ou idoso:

let idade = 65;

if (idade < 18) {
  console.log("é adolecente");
} else if (idade > 60) {
  console.log("é idoso");
} else {
  console.log("é adulto");
}

//7)Verificar se uma pessoa é solteira, casada ou em outro estado civil:

let estadoCivil = "solteiro";

if (estadoCivil === "solteiro") {
  console.log("o estado civil é solteiro");
} else if (estadoCivil === "casada") {
  console.log("o estado civil é casada");
} else {
  console.log("o estado civil é outro diferente de casada e solteiro");
}

//8) Verificar se um número é ímpar, par ou zero:

let num10 = 10;
total = 0;
if (total === num10) {
  console.log("o numero é zero");
} else if (num10 % 3 === 0) {
  console.log("o numero é impar");
} else if (num10 % 2 === 0) {
  console.log("o numero é par");
}

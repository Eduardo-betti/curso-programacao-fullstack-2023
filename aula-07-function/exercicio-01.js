// 1. Escreva uma função chamada "greet" que retorna "Olá, mundo!" quando chamada.

function greet() {
  document.write("hello word" + "<br>");
}
greet();
// 2. Escreva uma função chamada "sum" que retorna a soma de dois números.

let n1 = Number(prompt("Digite o primeiro numero a ser somado:"));
let n2 = Number(prompt("Digite o segundo numero a ser somado:"));

function sum(a, b) {
  let soma = a + b;
  return document.write(soma + "<br>");
}

sum(n1, n2);

// 3. Escreva uma função chamada "isEven" que retorna verdadeiro se um número é par
// e falso se for ímpar.

let numeroDesejado = Number(
  prompt("Digite para saber se o numero é Par ou Impar:")
);

function isEven(num) {
  if (num % 2 === 0) {
    document.write("True, o Numero é Par <br> ");
  } else {
    document.write("False, o Numero é Impar <br> ");
  }
}

isEven(numeroDesejado);

// 4. Escreva uma função chamada "getLength" que retorna o tamanho de uma string.

let palavra = String(
  prompt("Digite uma palavra para saber sua quantidade de cacteres:")
);

function getLength(texto) {
  let letras = texto.length;
  document.write(`A palavra inserida tem o tamanho de ${letras} letras <br> `);
}

getLength(palavra);

// 5. Escreva uma função chamada "greaterThan" que retorna verdadeiro se o primeiro
// número for maior que o segundo e falso caso contrário.

let numero1 = String(prompt("Digite o primeiro numero"));
let numero2 = String(prompt("Digite o segundo numero"));

function greaterThan(num1, num2) {
  if (num1 > num2) {
    document.write(
      "O primeiro é True, portando o numero é maior que o segundo"
    );
  } else {
    document.write(
      "O primeiro é False, portando o numero é menor que o segundo"
    );
  }
}
greaterThan(numero1, numero2);

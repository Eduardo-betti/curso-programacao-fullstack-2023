// Escreva um programa que imprima todos os números ímpares de 0 a 100 usando
// um laço

for (numeros = 0; numeros <= 100; numeros++) {
  if (numeros % 2 != 0) {
    console.log(numeros);
  }
}

// Escreva um programa que imprima todos os elementos de um array usando um
// laço

const num1 = ["azul", "verde", "preto"];
for (i = 0; i <= num1.length; i++) {
  console.log(num1[i]);
}

// Escreva um programa que imprima todos os elementos de um array de trás para
// frente usando um laço

const num2 = ["azul", "verde", "preto"];
for (i = 0; i <= num2.length; i++) {
  console.log(num2.pop());
}
console.log(num2.shift());

// Escreva um programa que imprima todos os números múltiplos de 5 entre 0 e 100
// usando um laço

for (i = 0; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

// 3) Usando o for, crie uma função que imprime os números pares de 0 a 100:

function numerosPares() {
  for (numeros = 0; numeros <= 100; numeros++)
    if (numeros % 2 === 0) {
      console.log(numeros);
    }
}
numerosPares();

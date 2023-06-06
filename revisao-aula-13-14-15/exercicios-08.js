// 8) Usando o reduce, crie uma função que itera sobre um array e retorna a soma dos
// seus elementos:

const listArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];

function arraySoma() {
  const somaDosNum = listArray.reduce((valor1, valor2) => valor1 + valor2);
  console.log(somaDosNum);
}
arraySoma();

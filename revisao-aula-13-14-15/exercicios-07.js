// 7)Usando o filter, crie uma função que itera sobre um array e retorna um novo array
// com apenas os números pares:

const listArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];

function numPares() {
  const addList = listArray.filter((num1) => num1 % 2 === 0);
  console.log(addList);
}
numPares();

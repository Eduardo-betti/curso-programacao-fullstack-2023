// Crie um array chamado "números" e adicione os números 1, 2, 3, 4 e 5 a ele.
// Em seguida, imprima o array no console.

const numeros = [1, 2, 3, 4, 5];
console.log(numeros);

// Crie um array chamado "cores" e adicione as cores vermelho, azul e verde a
// ele. Em seguida, adicione a cor amarela ao final do array.
const cores = ["vermelho", "azul", "verde"];
cores.push("amarelo");
console.log(cores);

// Crie um array chamado "misturado" e adicione números e strings a ele. Em
// seguida, imprima o segundo item do array no console.

const misturado = [1, 2, "Verde", "Azul", 5, 4];
console.log(misturado[1]);

// Crie um array chamado "nomes" e adicione os nomes 'Ana', 'Bia', 'Carlos' e
// 'Daniela' a ele. Em seguida, remova o primeiro nome do array e imprima o array
// no console.

const nomes = ["Ana", "Bia", "Carlos", "Daniela"];
nomes.shift();
console.log(nomes);

// Crie um array chamado "valores" e adicione os números 1, 2, 3, 4, 5 e 6 a ele.
// Em seguida, use o método "slice" para criar um novo array chamado "segundo"
// que contenha os três últimos valores do array "valores".

const valores = [1, 2, 3, 4, 5, 6];
let segundo = valores.slice(2, 5);
console.log(segundo);

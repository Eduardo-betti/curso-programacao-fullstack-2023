// 1. Use o método filter para retornar apenas as palavras de um array que possuem
// mais de 5 caracteres exemplo: palavra.length . Obs.: o length também funciona em
// strings

const selecionadas = ["tanque", "subtitulo", "cenoura", "cabo", "fone", "tv"];
const cincoCaracteres = selecionadas.filter(
  (caracteres) => caracteres.length >= 5
);
console.log(cincoCaracteres);
// 2. Use o método map
//  para transformar um array de strings em um array contendo o tamanho de cada
// string. Obs.: o length também funciona em strings.
const tamanho = selecionadas.map((cadaTamanho) => cadaTamanho.length);
console.log(tamanho);
// 3. Use o método forEach para imprimir todos os elementos de um array no console.

const totalItens = selecionadas.forEach((elementArray) =>
  console.log(elementArray)
);
// 4. Use o método reduce para somar todos os números de um array.

const numerosSeclecionados = [2, 3, 6, 7, 8, 9, 20];

let soma = numerosSeclecionados.reduce((accu, valorReco) => accu + valorReco);

console.log(` ${soma}`);
// 5. Use o método reduce
//  para concatenar todos os elementos de um array de strings em uma única string

let soma2 = selecionadas.reduce((valor, valorInicial) => valor + valorInicial);

console.log(soma2);

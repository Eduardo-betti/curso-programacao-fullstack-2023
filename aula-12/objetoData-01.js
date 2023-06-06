// const hoje = new Date();

// const opcoes = {
//   day: "numeric",
//   weekday: "long",
//   mouth: "long",
//   year: "numeric",
// };

// const dataPorExtenso = hoje.toLocaleDateString("pt-BR", opcoes);

// console.log("Hoje é " + dataPorExtenso);

const hoje = new Date();
const anoNascimento = 1999;
const anoRecorrente = hoje.getUTCFullYear();

let idade = anoRecorrente - anoNascimento;
console.log(idade);

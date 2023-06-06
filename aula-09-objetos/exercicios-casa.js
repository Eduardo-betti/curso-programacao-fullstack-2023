// 1. Crie um objeto com pelo menos três propriedades e um método e imprima o
// valor de uma das propriedades no console.

const pessoa = {
  nome: "Eduardo",
  idade: 19,
  profissao: "Programador",
  saudacao: () => console.log(`Ola, meu nome é ${pessoa.nome} `),
};
pessoa.saudacao();
// 2. Adicione uma nova propriedade a um objeto e imprima o valor dessa
// propriedade no console.

const pessoas = [
  {
    nome: "Eduardo",
    idade: 18,
    sexo: "Masc",
  },
  {
    nome: "Raphael",
    idade: 38,
    sexo: "Masc",
  },
];

const novoObjeto = [
  { nome: "Raquel", idade: 18, sexo: "Fem" },
  {
    nome: "Eliane",
    idade: 38,
    sexo: "Fem",
  },
];

totalPessoas = novoObjeto + pessoas;

console.log(totalPessoas);
// 3. Remova uma propriedade de um objeto e imprima o valor dessa propriedade no
// console (verifique se ela ainda existe).
// 4. Verifique se um objeto tem uma determinada propriedade e imprima o resultado
// no console.
// 5. Percorra as propriedades de um objeto usando um laço e imprima cada uma
// delas no console.

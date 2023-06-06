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
  {},
];

const novoObjeto = [
  {
    nome: "Giovani",
    idade: 80,
    sexo: "Masc",
  },
].push(pessoas);

console.log(pessoas);

// const idadePessoas = pessoas
//   .filter((element) => element.idade < 60)
//   .forEach((element) => console.log(element.nome, element.idade));

// document.write(pessoas);

// const tamanhoString = pessoas.map((tamanho) => tamanho.nome.length);

// console.log(tamanhoString);

//1- Crie uma função construtora chamada "Pessoa" que receba os parâmetros "nome" e "idade" e
// que adicione esses parâmetros como propriedades da instância.

class Pessoa {
  constructor(nome, idade) {
    this._nome = nome;
    this._idade = idade;
  }
}
const pessoa1 = new Pessoa("Eduardo", 23);

console.log(`Nome: ${pessoa1._nome}`);
console.log(`Idade: ${pessoa1._idade}`);

// 2 Crie uma classe chamada "Animal" que não receba nenhum parâmetro. Adicione propriedades
// na classe para o nome e a espécie do animal, e métodos para definir e exibir essas
// propriedades.
class Animal {
  constructor(nome, especie) {
    this.nome = "";
    this.especie = "";
  }
  definirNome(nome) {
    this.nome = nome;
  }
  definirEspecie(especie) {
    this.especie = especie;
  }
  exibirDados() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Espécie: ${this.especie}`);
  }
}
const animal = new Animal();

animal.definirNome("Rex");
animal.definirEspecie("Dinossauro");
animal.exibirDados();

// 3 Crie uma função construtora chamada "Livro" que receba os parâmetros "titulo", "autor" e "ano" e
// que adicione esses parâmetros como propriedades da instância. Adicione um método na função
// para exibir o título e o autor do livro.
class Livro {
  constructor(titulo, autor, ano) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
  }
  exibirDados() {
    return console.log(
      `O titulo do livro é ${this.titulo}, escrito pelo autor ${this.autor}, no ano de ${this.ano}`
    );
  }
}
const livro = new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", 1943);
livro.exibirDados();

// 4 Crie uma classe chamada "ContaBancaria" que receba os parâmetros "titular" e "saldoInicial".
// Adicione métodos na classe para depositar um valor na conta, sacar um valor da conta e exibir o
// saldo atual da conta.

class ContaBancaria {
  constructor(titular, saldoInicial) {
    this.titular = titular;
    this.saldoInicial = saldoInicial;
  }
  depositar(total) {
    this.saldoInicial += total;
  }
  sacar(retirada) {
    if (retirada > this.saldoInicial) {
      console.log("O saldo é insuficiente para sacar o valor desejado.");
    } else {
      this.saldoInicial -= retirada;
    }
  }
  exibirSalario() {
    console.log(`O saldo atual da conta é ${this.saldoInicial}`);
  }
}

const proprietario = new ContaBancaria("Eduardo", 500);

proprietario.depositar(5000);
proprietario.sacar(300);
proprietario.exibirSalario();

// 5 Crie uma classe chamada "Produto" que receba os parâmetros "nome" e "preco". Adicione
// métodos na classe para exibir o nome e o preço do produto.

class Produto {
  constructor(nome, preco) {
    this.nome = "";
    this.preco = "";
  }
  exibirNome ();
}

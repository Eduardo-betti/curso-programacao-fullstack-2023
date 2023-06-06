class Pai {
  constructor(nome) {
    this.nome = nome;
  }
  falar() {
    console.log(`Olá, meu nome é ${this.nome}`);
  }
}

class Filho extends Pai {
  constructor(nome, idade) {
    super(nome);
    this.idade = idade;
  }
}

const filho = new Filho("Eduardo", 23);

console.log(filho.nome);

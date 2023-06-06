class Veiculo {
  constructor(nome) {
    this.nome = nome;
  }
  locomover() {
    console.log(
      `O ${this.nome},com o modelo ${this.modelo} da marca ${this.marca} com a cor ${this.cor}, está andando à ${this.velocidade} `
    );
  }
}
class Carro extends Veiculo {
  constructor(nome, modelo, marca, velocidade, cor) {
    super(nome);
    this.modelo = modelo;
    this.marca = marca;
    this.velocidade = velocidade;
    this.cor = cor;
  }
}

const carro1 = new Carro("Carro", "320i", "BMW", "350Km/h", "Preta");

carro1.locomover();



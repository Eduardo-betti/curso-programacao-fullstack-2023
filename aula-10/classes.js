class carro {
  constructor(marca, cor, modelo, velocidade) {
    this.marca = marca;
    this.cor = cor;
    this.modelo = modelo;
    this.velocidade = velocidade;
  }
  acelerar() {
    return `O Carro ${this.marca}, com modelo ${this.modelo}, está acelerando podendo chegar na velocidade ${this.velocidade}`;
  }
}



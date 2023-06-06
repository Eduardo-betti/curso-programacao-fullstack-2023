function carro(marca, cor, modelo, velocidade, acelerar) {
  this.marca = marca;
  this.cor = cor;
  this.modelo = modelo;
  this.velocidade = velocidade;
  this.acelerar = () => {
    return `O Carro ${this.marca}, com modelo ${this.modelo} está acelerando podendo chegar na velocidade ${this.velocidade}`;
  };
}

const carro1 = new carro("Hyundai", "vermelho", "HB20", "200km/h");
const carro2 = new carro("BMW", "preto", "320i", "330km/h");
const carro3 = new carro("Ford", "branca", "Focus", "260km/h");
console.log(carro2.acelerar());

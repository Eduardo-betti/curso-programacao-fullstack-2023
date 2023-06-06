// Usando classes, crie uma classe chamada Retângulo que tenha os seguintes
// métodos:
// calcularArea que calcula a área do retângulo;
// calcularPerimetro , que calcula o perímetro do retângulo;
// calcularDiagonal , que calcula a diagonal do retângulo;
// toString , que retorna uma string com as propriedades do retângulo

class Retangulo {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }
  calcularArea(totalArea) {
    totalArea = this.largura * this.altura;
    return totalArea;
  }
  calcularPerimetro(totalPerimetro) {
    totalPerimetro = this.largura * this.altura;
    return totalPerimetro;
  }
  calcularDiagonal(totalDiagonal) {
    const total = Math.pow(this.largura, 2) + Math.pow(this.altura, 2);
    totalDiagonal = Math.sqrt(total).toFixed();
    return totalDiagonal;
  }
  toString() {
    return `O retangulo tem a altura de ${this.altura} e a largura de ${
      this.largura
    } tendo o total como paramentros area ${this.calcularArea()},perimetro com ${this.calcularPerimetro()} e sua diagonal ${this.calcularDiagonal()}`;
  }
}

const quadrado = new Retangulo(1.8, 20);

console.log(quadrado.calcularDiagonal());
console.log(quadrado.calcularArea());
console.log(quadrado.toString());

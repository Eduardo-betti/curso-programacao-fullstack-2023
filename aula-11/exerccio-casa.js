// Crie uma classe Figura com as propriedades altura e largura . Crie uma classe
// Retangulo que herda da classe Figura e adiciona um método calcularArea() que
// retorna a área do retângulo (altura x largura) usando o objeto Math . Crie uma
// instância de Retangulo e chame o método calcularArea() .

class Figura {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }
}

class Retangulo extends Figura {
  constructor(altura, largura) {
    super(altura, largura);
  }
  calcularArea() {
    console.log(this.altura * this.largura);
  }
}

const totalLarguAltura = new Retangulo("2.00", "3.00");

totalLarguAltura.calcularArea();

// Crie uma classe Pessoa com as propriedades nome e idade . Crie uma classe
// Estudante que herda da classe Pessoa e adiciona uma propriedade curso . Crie um
// método calcularMedia(nota1, nota2) na classe Estudante que retorna a média
// aritmética das notas passadas como parâmetro, usando o objeto Math . Crie uma
// instância de Estudante , defina seus valores e chame o método calcularMedia() .

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

class Estudante extends Pessoa {
  constructor(nome, idade, nota1, nota2) {
    super(nome, idade);
    this.nota1 = nota1;
    this.nota2 = nota2;
  }
  calcularMedia() {
    let total = (this.nota1 + this.nota2) / 2;
    console.log(
      `o Aluno ${this.nome} com a idade ${this.idade} está com a media: ` +
        total
    );
  }
}

const notaEstudante1 = new Estudante("Eduardo", "18", 5, 10);

notaEstudante1.calcularMedia();

// Crie uma classe Veiculo com as propriedades marca , modelo , ano e preco . Crie
// uma classe Carro que herda de Veiculo e adiciona uma propriedade placa . Crie
// um método calcularValorParcela(qtdParcelas) na classe Carro que retorna o valor da
// parcela do carro com juros de 2% ao mês, usando o objeto Math . Crie uma
// instância de Carro , defina seus valores e chame o método calcularValorParcela() .

class Veiculo {
  constructor(marca, modelo, ano, preco) {
    this.marca = marca;
    this.modelo = modelo;
    this.anos = ano;
    this.preco = preco;
  }
}

class Carro extends Veiculo {
  constructor(marca, modelo, ano, preco, qtdParcelas) {
    super(marca, modelo, ano, preco);
    this.qtdParcelas = qtdParcelas;
  }
  calcularValorParcela() {
    let ValorTotal = this.preco + Math.abs(this.preco * 0.02);

    console.log(ValorTotal);
  }
}

const valorCarro1 = new Carro("BMW", "320i", "2020", "10.000", 42);

valorCarro1.calcularValorParcela();

// Crie uma classe Forma com um método calcularPerimetro() . Crie uma classe
// Circulo que herda de Forma e adiciona uma propriedade raio . Crie um método
// calcularArea() na classe Circulo que retorna a área do círculo (pi x raio ao
// quadrado) usando o objeto Math . Crie uma instância de Circulo , defina seu valor
// de raio e chame o método calcularPerimetro() e calcularArea() .

class Forma {
  constructor(raio) {
    this.raio = raio;
  }
  calcularPerimetro() {
    const totalPerimetro = this.raio * 2;
    console.log(totalPerimetro);
  }
}

class Circuito extends Forma {
  constructor(raio) {
    super(raio);
  }
  calcularArea() {
    const pi = 3.14;
    const total = Math.pow(pi * this.raio, 2);
    console.log(total);
  }
}

const quadrado1 = new Circuito(25);

quadrado1.calcularArea();
quadrado1.calcularPerimetro();

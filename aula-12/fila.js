const fila = [];

fila.unshift(1);
fila.unshift(3);
fila.unshift(4);
fila.unshift(5);
fila.unshift(6);

console.log(fila.pop());
console.log(fila.pop());

const construirFila = function () {
  const dados = [];
  const adicionarDado = function (valor) {
    dados.unshift(valor);
  };
};

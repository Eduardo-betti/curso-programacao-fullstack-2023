// const vetor = [];

// vetor.push(1);
// vetor.push(2);
// vetor.push(3);
// vetor.push(4);

// console.log(vetor);

// console.log(vetor.pop());
// console.log(vetor);

const construirPilha = () => {
  const dados = [];
  let topo = -1;

  const inserirDado = (valor) => {
    topo++;
    dados[topo] = valor;
    console.log(dados);
  };
  const removerDado = () => {
    if (topo < 0) {
      return false;
    } else {
      const item = dados[topo];
      delete dados[topo];
      dados.splice(topo, 1);
      topo--;
      return item;
    }
  };
  const impirmirDado = () => {
    console.log(dados);
  };
  return {
    inserirDado,
    removerDado,
    impirmirDado,
  };
};

const pilha = construirPilha();

pilha.inserirDado(20);
pilha.inserirDado(30);
pilha.inserirDado(40);
pilha.inserirDado(60);
pilha.removerDado();
pilha.removerDado();
pilha.removerDado();
pilha.removerDado();
pilha.removerDado();
pilha.impirmirDado();

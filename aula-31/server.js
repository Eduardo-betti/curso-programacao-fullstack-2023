const express = require("express");
const app = express();
const port = 5555;

const produtos = [
  {
    id: 1,
    nome: "Pregos",
    preco: 1.0,
  },
  {
    id: 2,
    nome: "Tomadas",
    preco: 2.2,
  },
  {
    id: 3,
    nome: "Lampadas",
    preco: 10.5,
  },
];
//FAZENDO UMA REQUISIÇÃO DO ID
app.get("/produtos/:id", (requi, resp) => {
  const id = Number(requi.params.id);
  const produto = produtos.find((element) => element.id === id);

  // loop para resposta do produto ou mensagem e erro
  if (produto) {
    resp.json(produto);
  } else {
    resp.status(404).json({ erro: "Produto não encontrado" });
  }
});

// TRANSFORMANDO OS DADOS DO PRODUTO EM VARIAVEIS DIFERENTES
app.post("/produtos", (requi, resp) => {
  const { nome, preco } = requi.body;

  // VERIFICANDO QUANDOS ID CONTEM E NUMERANDO
  const id = produtos.length + 1;

  const novoProduto = {
    nome,
    preco,
    id,
  };
  // ADICIONANDO O PRODUTO NOVO NO ANTIGO
  produtos.push(novoProduto);
});
app.put("produtos/:id", (requi, resp) => {});
app.delete("produtos/:id", (requi, resp) => {
  const id = Number(requi.params.id);
  produtos.filter((element) => element !== id);
});

// TRANSFORMANDO OS DADOS PRODUTOS EM JSON
app.get("/produtos", (requi, res) => {
  res.json(produtos);
});
// COLOCANDO A PORTA DE ACESSO
app.listen(port, () => {
  console.log(`Rodando no link http://127.0.0.1:${port}/produtos/`);
});

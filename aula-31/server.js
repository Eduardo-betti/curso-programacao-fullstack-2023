const express = require("express");
const app = express();
const port = 4000;

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

app.get(port, () => {
  console.log("pacote iniciado");
});

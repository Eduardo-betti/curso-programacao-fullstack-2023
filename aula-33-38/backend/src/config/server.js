// Apos instlado o dotenv, fazemos o requerimento
const dotenv = require("dotenv");

// É um mecanismo  de proteção maior ao navegador
const cors = require("cors");

dotenv.config();

const express = require("express");
// Faz o requerimento das routes criadas
const routes = require("../../routes");

// Faz a extenção do express para o app
const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(routes);

module.exports = app;

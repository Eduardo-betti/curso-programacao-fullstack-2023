const app = require("./src/config/server");

// Acesso a porta
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Servidor rodando no endereço: https//localhost:${port}`);
});

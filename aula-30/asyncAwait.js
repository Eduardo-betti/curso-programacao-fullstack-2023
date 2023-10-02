function primeiraFuncao() {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("Esperou isso aqui também");
      resolve();
    }, 3000)
  );
}
async function segundaFuncao() {
  console.log("iniciou");
  await primeiraFuncao();
  console.log("Terminou");
}
segundaFuncao();

const pecas = ["BOA", "RUIM", "RUIM", "BOA", "RUIM"];

let pecasFilter = pecas
  .filter((pecas) => pecas === "RUIM")
  .map((mapeadas) => (mapeadas = "BOA"));

console.log(pecasFilter);

function esperar(segundos) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Esperei mo cota pra chegar aqui tipo uns ${segundos} segundos`);
    }, segundos * 1000);
    // setTimeout(() => {
    //   reject("Promessa Rejeitada");
    // }, 3000);
  });
}

esperar(10).then(console.log);

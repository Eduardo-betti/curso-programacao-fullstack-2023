const p = new Promise((resolverPromessa, RejeitarPromessa) => {
  setTimeout(() => {
    resolverPromessa("Promessa Resolvida");
  }, 3000);
  setTimeout(() => {
    RejeitarPromessa("Promessa Rejeitada");
  }, 3000);
});

p.then((resultado) => console.log(resultado));
p.catch(console.log);

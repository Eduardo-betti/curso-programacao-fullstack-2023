async function esperarSegundos(s) {
  await new Promise((resolve) => setTimeout(resolve, s * 1000));
  console.log(`Esperei ${s} segundos e cara é muito tempo!`);
}

esperarSegundos(2);

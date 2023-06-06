// 4)Usando o for...in em objetos, crie uma função que imprime as propriedades de um
// objeto:

function imprimirObjetos(objetos) {
  for (let propriedadeObjeto in objetos) {
    console.log(propriedadeObjeto + ": " + objetos[propriedadeObjeto]);
  }
}

const MeusObjetos = {
  nome: "Eduardo",
  idade: "18",
  Nacionalidade: "Brasileiro",
};

imprimirObjetos(MeusObjetos);

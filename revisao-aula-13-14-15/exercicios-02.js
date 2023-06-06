// 2) Crie uma função chamada exibirDiaDaSemana que recebe um número de 1 a 7 como
// argumento e retorna o nome do dia da semana correspondente. Utilize a estrutura
// switch para realizar essa operação. Se o número fornecido não estiver dentro do
// // intervalo válido, a função deve retornar a string "Número inválido.

function exibirDiaDaSemana(valor) {
  switch (valor) {
    case "1":
      console.log("numero digitado é 1");
      break;
    case "2":
      console.log("numero digitado é 2");
      break;
    case "3":
      console.log("numero digitado é 3");
      break;
    case "4":
      console.log("numero digitado é 4");
      break;
    case "5":
      console.log("numero digitado é 5");
      break;
    case "6":
      console.log("numero digitado é 6");
      break;
    case "7":
      console.log("numero digitado é 7");
      break;
    default:
      console.log("Numero digitado invalido");
  }
}
exibirDiaDaSemana("7");

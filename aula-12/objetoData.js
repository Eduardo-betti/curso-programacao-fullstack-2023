const meses = [
  "Janeiro",
  "Feveiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
const diasDaSemana = [
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sabado",
  "Domingo",
];

const hoje = new Date();
const diaDaSemana = diasDaSemana[hoje.getDay()];
const diaMes = hoje.getDate();
const mes = meses[hoje.getMonth()];
const ano = hoje.getFullYear();

console.log(
  `Hoje é dia ${diaMes}, ${diaDaSemana} no mes de ${mes} do corrente ano de ${ano}`
);




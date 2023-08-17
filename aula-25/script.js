const botao = document.querySelector(".btn");

function verificarIdade() {
  let anoAtual = new Date().getFullYear();
  let anoNascimento = document.querySelector("input#txtano");
  let resultado = document.querySelector("div#resultado");
  if (anoNascimento.value.length === 0 || anoNascimento.value > anoAtual) {
    window.alert("ERRO: Verifique os dados e tente novamente.");
  } else {
    let formSexo = document.getElementsByName("radsex");
    let idade = anoAtual - Number(anoNascimento.value);
    let faixaEtaria = "";
    let img = document.createElement("img");
    img.setAttribute("id", "imagem");

    if (formSexo[0].checked) {
      if (idade >= 0 && idade <= 4) {
        faixaEtaria = "Uma Bebê";
        img.setAttribute("src", "./assets/bebe.f.jpg");
      } else if (idade >= 5 && idade <= 15) {
        faixaEtaria = "Uma crianca";
        img.setAttribute("src", "./assets/crianca-f.jpeg");
      } else if (idade >= 16 && idade <= 18) {
        faixaEtaria = "Uma adolescente";
        img.setAttribute("src", "./assets/adolescente-f.jpeg");
      } else if (idade >= 18 && idade <= 65) {
        faixaEtaria = "Uma adulta";
        img.setAttribute("src", "./assets/adulto-f.jpeg");
      } else if (idade > 65) {
        faixaEtaria = "Uma Idosa";
        img.setAttribute("src", "./assets/idoso-f.jpeg");
      }
    } else {
      if (idade >= 0 && idade <= 4) {
        faixaEtaria = "Um Bebê";
        img.setAttribute("src", "./assets/bebe.m.jepg");
      } else if (idade >= 5 && idade <= 15) {
        faixaEtaria = "Um crianca";
        img.setAttribute("src", "./assets/crianca-m.jpeg");
      } else if (idade >= 16 && idade <= 18) {
        faixaEtaria = "Um adolescente";
        img.setAttribute("src", "./assets/adolescente-m.jpeg");
      } else if (idade >= 18 && idade <= 65) {
        faixaEtaria = "Um adulto";
        img.setAttribute("src", "./assets/adulto-m.jpeg");
      } else if (idade > 65) {
        faixaEtaria = "Um Idoso";
        img.setAttribute("src", "./assets/idoso-m.jpeg");
      }
    }
    resultado.innerHTML = `Detectamos ${faixaEtaria} com ${idade}`;
    resultado.appendChild(img);
  }
}
botao.addEventListener("click", verificarIdade);

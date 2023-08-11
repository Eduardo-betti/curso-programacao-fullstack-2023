let quadrado = document.querySelector(".quadrado");

let red = Math.floor(Math.random() * 255);
let green = Math.floor(Math.random() * 255);
let blue = Math.floor(Math.random() * 255);

quadrado.style.width = "300px";
quadrado.style.heigth = "300px";
quadrado.style.backgroundColor = `rbg ${red},${green}${blue}`;

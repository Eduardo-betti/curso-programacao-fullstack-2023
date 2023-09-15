const contenderCards = document.querySelector(".cards-container");
contenderCards.innerHTML = "";

for (let i = 1; i <= 100; i++) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((resp) => resp.json())
    .then((resp) => {
      let card = document.createElement("div");
      card.setAttribute("class", "card");

      let img = document.createElement("img");
      img.src = resp.sprites.other.dream_world.front_default;

      let title = document.createElement("h1");
      title.innerText = resp.name;

      card.appendChild(img);
      card.appendChild(title);
      contenderCards.appendChild(card);
    });
}

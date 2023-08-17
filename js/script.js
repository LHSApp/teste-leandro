const apiUrl = "https://64dacc44593f57e435b02eec.mockapi.io/v1/depoimentos";
const carrosselInner = document.querySelector("#carrossel .carousel-inner");

function createDepoimentoCard(depoimento) {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  const nome = document.createElement("h3");
  const texto = document.createElement("p");

  img.src = depoimento.avatar;
  nome.textContent = depoimento.name;
  texto.textContent = depoimento.depoimentos;

  card.appendChild(img);
  card.appendChild(nome);
  card.appendChild(texto);

  return card;
}

function createCarrosselItem(depoimentos) {
  const item = document.createElement("div");
  item.classList.add("carousel-item");

  const grupoDiv = document.createElement("div");
  grupoDiv.classList.add("d-flex", "justify-content-center"); // Center items in mobile

  depoimentos.forEach((depoimento) => {
    const card = createDepoimentoCard(depoimento);
    grupoDiv.appendChild(card);
  });


  item.appendChild(grupoDiv);
  return item;
}

fetch(apiUrl)
  .then((res) => res.json())
  .then((depoimentos) => {
    const gruposDepoimentos = [];
    for (let i = 0; i < depoimentos.length; i += 3) {
      gruposDepoimentos.push(depoimentos.slice(i, i + 3));
    }

    gruposDepoimentos.forEach((grupo, index) => {
      const item = createCarrosselItem(grupo);

      if (index === 0) {
        item.classList.add("active");
      }

      carrosselInner.appendChild(item);
    });
  });

 
  

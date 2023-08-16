// Busca os depoimentos da API
fetch("https://64dacc44593f57e435b02eec.mockapi.io/v1/depoimentos")
  .then((res) => res.json())
  .then((depoimentos) => {
    // Seleciona a div container do carrossel
    const carrosselInner = document.querySelector("#carrossel .carousel-inner");

    // Divide os depoimentos em grupos de 3
    const gruposDepoimentos = [];
    for (let i = 0; i < depoimentos.length; i += 3) {
      gruposDepoimentos.push(depoimentos.slice(i, i + 3));
    }

    // Itera pelos grupos de depoimentos
    gruposDepoimentos.forEach((grupo, index) => {
      // Cria um item de carrossel para cada grupo
      const item = document.createElement("div");
      item.classList.add("carousel-item");

      // Define o primeiro item como ativo
      if (index === 0) {
        item.classList.add("active");
      }

      // Cria uma div para o grupo de depoimentos
      const grupoDiv = document.createElement("div");
      grupoDiv.classList.add("d-flex", "justify-content-between");

      // Itera pelos depoimentos do grupo
      grupo.forEach((depoimento) => {
        // Cria um card para cada depoimento
        const card = document.createElement("div");
        card.classList.add("card");

        // Cria elementos para o depoimento
        const img = document.createElement("img");
        const nome = document.createElement("h3");
        const texto = document.createElement("p");

        // Preenche o conteúdo
        img.src = depoimento.avatar;
        nome.textContent = depoimento.name;
        texto.textContent = depoimento.depoimentos;

        // Adiciona os elementos ao card
        card.appendChild(img);
        card.appendChild(nome);
        card.appendChild(texto);

        // Adiciona o card ao grupo de depoimentos
        grupoDiv.appendChild(card);
      });

      // Adiciona o grupo de depoimentos ao item do carrossel
      item.appendChild(grupoDiv);

      // Adiciona o item do carrossel à div do carrossel
      carrosselInner.appendChild(item);
    });

    // Inicializa o carrossel do Bootstrap
    const carousel = new bootstrap.Carousel(
      document.querySelector("#carrossel"),
      {
        interval: 5000,

        slidesPerView: 3,

        slidesPerGroup: 1,
      }
    );
  });

async function carregarNoticias() {
  try {
    const r = await fetch("http://localhost:3000/noticias");
    const data = await r.json();

    const lista = document.getElementById("lista");

    data.noticias.forEach(n => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${n.imagem}" class="thumb">

        <div class="info">
          <span class="categoria">${n.categoria}</span>
          <h2>${n.titulo}</h2>

          <a href="${n.link}" target="_blank" class="botao">Ler notícia</a>
        </div>
      `;

      lista.appendChild(card);
    });

  } catch (err) {
    console.error("Erro ao carregar:", err);
  }
}

carregarNoticias();

async function carregarNoticias() {
  try {
    const req = await fetch("https://webscrapnoticiasrondoniaaovivo.onrender.com/noticias");
    const data = await req.json();

    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    data.noticias.forEach((n) => {
      lista.innerHTML += `
        <div class="card">
          <img class="thumb" src="${n.imagem}">
          <div class="info">
            <span class="categoria">${n.categoria}</span>
            <a class="titulo" href="${n.link}" target="_blank">${n.titulo}</a>
            <a class="botao" href="${n.link}" target="_blank">Ler notícia</a>
          </div>
        </div>
      `;
    });

  } catch (err) {
    console.log("Erro:", err);
  }
}

carregarNoticias();

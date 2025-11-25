async function carregarNoticias() {
  try {
    const req = await fetch("https://webscrapnoticiasrondoniaaovivo.onrender.com/noticias");
    const data = await req.json();

    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    data.noticias.forEach((n) => {
      lista.innerHTML += `
        <li style="margin-bottom:20px;">
          <img src="${n.imagem}" width="200" style="border-radius:4px;"><br>
          <strong>${n.categoria}</strong><br>
          <a href="${n.link}" target="_blank">${n.titulo}</a>
        </li>
      `;
    });

  } catch (err) {
    console.log("Erro:", err);
  }
}

carregarNoticias();

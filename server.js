const express = require("express");
const cheerio = require("cheerio");

// Fetch nativo do Node
const fetch = global.fetch;

const app = express();

// Servir arquivos da pasta PUBLIC
app.use(express.static("public"));

// Liberação de acesso
app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

// ROTA DE NOTÍCIAS
app.get("/noticias", async (req, res) => {
  try {
    const response = await fetch("https://www.rondoniaovivo.com/");
    const html = await response.text();
    const $ = cheerio.load(html);

    const noticias = [];

    // Pegando manchetes do slider
    $(".news-slide a").each((i, el) => {
      noticias.push({
        titulo: $(el).find("p").text().trim(),
        categoria: $(el).find(".category-tag").text().trim(),
        imagem: "https://www.rondoniaovivo.com" + $(el).find("img").attr("src"),
        link: "https://www.rondoniaovivo.com" + $(el).attr("href"),
      });
    });

    // Pegando quadradinhos do lado direito
    $(".news-destaques a").each((i, el) => {
      noticias.push({
        titulo: $(el).find("p").text().trim(),
        categoria: $(el).find(".category-tag").text().trim(),
        imagem: "https://www.rondoniaovivo.com" + $(el).find("img").attr("src"),
        link: "https://www.rondoniaovivo.com" + $(el).attr("href"),
      });
    });

    res.send({ noticias });

  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

// Porta Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Rodando na porta " + PORT));

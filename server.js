const express = require("express");
const cheerio = require("cheerio");

const app = express();

app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/noticias", async (req, res) => {
  try {
    const response = await fetch("https://www.rondoniaaovivo.com/ultimas");
    const html = await response.text();
    const $ = cheerio.load(html);

    const noticias = [];

    // Slider
    $(".news-slide a").each((i, el) => {
      noticias.push({
        categoria: $(el).find(".category-tag").text().trim(),
        titulo: $(el).find("p").text().trim(),
        link: "https://www.rondoniaaovivo.com" + $(el).attr("href"),
        imagem: "https://www.rondoniaaovivo.com" + $(el).find("img").attr("src")
      });
    });

    // Destaques
    $(".news-destaques a").each((i, el) => {
      noticias.push({
        categoria: $(el).find(".category-tag").text().trim(),
        titulo: $(el).find("p").text().trim(),
        link: "https://www.rondoniaaovivo.com" + $(el).attr("href"),
        imagem: "https://www.rondoniaaovivo.com" + $(el).find("img").attr("src")
      });
    });

    res.json({ noticias });

  } catch (err) {
    console.error("ERRO NO SCRAP:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () =>
  console.log("Rodando! http://localhost:3000/noticias")
);

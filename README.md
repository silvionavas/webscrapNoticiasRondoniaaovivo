📌 Web Scraping — Rondônia Ao Vivo

API + Front-end usando Node.js, Express, Cheerio e Render

Este projeto realiza Web Scraping no portal Rondônia ao Vivo, extraindo:

título

imagem

categoria

link

Os dados são servidos como uma API REST JSON, e uma página front-end consome esses dados em tempo real.

🚀 Demonstração
🔹 API Online (Render)

https://webscrapnoticiasrondoniaaovivo.onrender.com/noticias

🔹 Front-end (GitHub Pages ou local)

Abra o arquivo public/index.html ou publique no GitHub Pages.

🧩 Tecnologias usadas

Node.js

Express

Cheerio

Cors

HTML / CSS / JS

Render (Deploy do backend)

📁 Estrutura
/
├── server.js
├── package.json
├── public/
│   ├── index.html
│   └── script.js
└── README.md

🛠 Instalação e uso local
npm install
node server.js


A API ficará disponível em:

http://localhost:3000/noticias


Abra:

public/index.html

☁️ Deploy no Render

Suba o projeto no GitHub

Crie Web Service no Render

Configure:

Campo	Valor
Build Command	npm install
Start Command	node server.js

Pronto! A API ficará no link:

https://seu-projeto.onrender.com/noticias

🔗 Consumindo a API no front-end

public/script.js:

fetch("https://webscrapnoticiasrondoniaaovivo.onrender.com/noticias")
  .then(r => r.json())
  .then(data => console.log(data));
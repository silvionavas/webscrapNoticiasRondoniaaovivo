📌 Web Scraping de Notícias — Node.js + Express + Cheerio

Este projeto realiza web scraping no portal Rondônia Ao Vivo, coletando as últimas notícias da página inicial.
Os dados são extraídos no servidor (Node.js) usando Cheerio, expostos via uma API REST e consumidos no front-end.

✔ Web Scraping com Node.js
✔ API própria em Express
✔ Deploy no Render (backend)
✔ Front-end estático (GitHub Pages)

🚀 Funcionalidades

Raspagem automática das notícias principais:

título

link

imagem

categoria

API pública em:

/noticias


Front-end faz fetch() nessa API e exibe tudo em HTML.

🧩 Tecnologias utilizadas

Node.js

Express

Cheerio

Cors

Fetch API no front-end

Render (backend)

GitHub Pages (frontend)

📂 Estrutura do projeto
/
├── server.js          → Servidor + Web Scraping
├── package.json
├── public/
│   ├── index.html     → Front-end
│   └── script.js      → Consumo da API
└── README.md

🔧 Como rodar localmente
1️⃣ Instalar dependências
npm install

2️⃣ Rodar o servidor
node server.js


O backend rodará em:

http://localhost:3000/noticias

3️⃣ Abrir o front-end

Abra o arquivo:

public/index.html


Ele vai fazer fetch() do backend local.

☁️ Deploy no Render (Backend)

Suba seu repositório no GitHub

Acesse https://render.com

Create New → Web Service

Conecte seu repositório

Configure:

Campo	Valor
Environment	Node
Build Command	npm install
Start Command	node server.js

Certifique-se que seu código usa a porta do Render:

const PORT = process.env.PORT || 3000;
app.listen(PORT);


Depois o Render vai gerar algo como:

https://seu-projeto.onrender.com/noticias

🌐 Deploy no GitHub Pages (Frontend)

Coloque index.html + script.js dentro da pasta /public

Suba no GitHub

Vá em:
Settings → Pages → Deploy from branch

Escolha a pasta /public

Sua página ficará assim:

https://seuusuario.github.io/seu-projeto/

🔗 Como conectar Frontend e Backend

No script.js, altere a URL:

const API_URL = "https://seu-projeto.onrender.com/noticias";

async function carregarNoticias() {
  const req = await fetch(API_URL);
  const data = await req.json();
  console.log(data);
}

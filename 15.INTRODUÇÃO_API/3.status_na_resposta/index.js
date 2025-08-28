const express = require("express");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// Criando rotas - endpoints
app.post("/createproducts", (req, res) => {
  const name = req.body.name;
  const price = req.body.price;

  if (!name) {
    res.status(422).json({ message: `O campo 'nome' é obrigatório!` });
  }

  if (!price) {
    res.status(422).json({ message: `O campo 'price' é obrigatório!` });
  }

  console.log(`Nome do produto: ${name}, preço R$${price}`);

  res
    .status(201)
    .json({
      message: `O produto: ${name} com preço R$${price} foi criado com sucesso`,
    });
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Primeira rota cirada com sucesso!" });
});

app.listen(3000);

const express = require("express");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// Criando rotas - endpoints
app.post("/createproducts", (req, res) =>{

    const name = req.body.name
    const price = req.body.price

    console.log(`Nome do produto: ${name}, preço R$${price}`)

    res.json({message: `O produto: ${name} com preço R$${price} foi criado com sucesso`})

})


app.get("/", (req, res) => {

    res.json({message: "Primeira rota cirada com sucesso!"})
})

app.listen(3000)

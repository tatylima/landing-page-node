// Importa o módulo express para esse arquivo
const express = require("express");
// Instancia uma referência do express no projeto
const app = express();
const port = 3000; // Const para armanezar a porta do servidor

// Rota principal que recebe uma função de callback que recebe dois parametros: 
// req de requisição
// res de resposta
app.get("/", (req, res) => {
    res.send("Hello World"); // Responde a requisição da rota com um texto.
  });

// Adicionando a const port e uma arow function de callback para mostrar no console que o servidor está rodando.
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
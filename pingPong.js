const express = require('express');
const axios = require('axios');
const app = express();
const port = 3002; 

// Middleware para tratar JSON
app.use(express.json());

// Endpoint que responde com "pong" quando recebe um "ping"
app.post('/ping', (req, res) => {
    const response = { data: "pong" }; // Objeto JavaScript, não uma string
    res.json(response); // Usando o método .json() para enviar como resposta
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

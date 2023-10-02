const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware para analisar o corpo da requisição JSON
app.use(bodyParser.json());

// Rota para interagir com a API de calculadora
app.post('/calcular', async (req, res) => {
  try {
    const { operacao, valor1, valor2 } = req.body;

    // Validar os parâmetros da requisição
    if (!operacao || valor1 === undefined || valor2 === undefined) {
      return res.status(400).json({ error: 'Parâmetros inválidos' });
    }

    // Configuração para a API de calculadora
    const calculatorApiUrl = 'http://ndc-srvhana.opus-idc.com.br:50200/RESTAdapter/MVMILHA/Calculadora';
    const calculatorRequestBody = {
      operacao,
      valor1,
      valor2
    };

    // Credenciais para autenticação básica
    const username = 'MVMILHA';
    const password = 'Redred@2024';

    // Fazer a requisição para a API de calculadora
    const calculatorResponse = await axios.post(calculatorApiUrl, calculatorRequestBody, {
      auth: {
        username,
        password
      }
    });

    // Exibir o resultado no console do servidor
    console.log('Resultado:', calculatorResponse.data.resultado);

    // Enviar a resposta
    res.json({ resultado: calculatorResponse.data.resultado });
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).json({ error: 'Algo deu errado' });
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

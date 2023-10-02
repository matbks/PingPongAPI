const express = require('express');
const axios = require('axios');
const app = express();
const port = 4000; 

// Endpoint que responde com "pong" quando recebe um "ping"
app.post('/ping', (req, res) => {
    response = '{ "data" : "pong" }'
    res.send(response);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

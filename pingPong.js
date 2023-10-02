const express = require('express');
const axios = require('axios');
const app = express();
const port = 3200; 

// Endpoint que responde com "pong" quando recebe um "ping"
app.get('/ping', (req, res) => {
    res.send('pong');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

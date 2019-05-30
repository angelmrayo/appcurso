'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
    res.send('Está es la app de Ejemplo cambiada a las 17:00');
});

app.get('/info', (req, res) => {
    res.send('Versión x.0');
});

app.listen(PORT, HOST);
console.log('Funcionando');

'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Node Application Platform Demo');
});

app.get('/test', (req, res) => {
    res.send('Test page')
})

app.listen(PORT, HOST);
module.exports = app;

console.log(`Running on http://${HOST}:${PORT}`);

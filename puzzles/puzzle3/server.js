const express = require('express');

const app = express();

app.get('/page1', (req, res) => res.send('Страница 1'));

app.get('/page2', (req, res) => res.send('Страница 2'));

app.listen(3000);

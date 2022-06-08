const express = require('express');
const app = express();
app.listen(3000);

app.get('/page1', (req, res) => {
  res.send('Страница 1');
})
  .get('/page2', (req, res) => {
    res.send('Страница 2');
  });

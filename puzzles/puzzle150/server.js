const express = require('express');
const { urlencoded } = require('express');

const app = express();

app.use(urlencoded({ extended: true }));

app.put('/replace', (req, res) => {
  if (req.body.name === 'fedor') res.send('OK');
  res.send('BAD');
});

app.listen(3000);

const express = require('express');
const { urlencoded } = require('express');

const app = express();

app.use(urlencoded({ extended: true }));

app.delete('/delete', (req, res) => {
  if (req.body.name === 'danya') res.send('Удалено');
  res.send('Не могу удалить');
});

app.listen(3000);

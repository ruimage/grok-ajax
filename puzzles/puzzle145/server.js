const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/login', (req, res) => {
  res.send(`<form name="login" method="POST">
    <label>Логин: <input name="login" type="text" /></label>
    <label>Пароль: <input name="password" type="password" /></label>
    <button type="submit">Войти</button>
  </form>`);
});

app.post('/login', (req, res) => {
  if (req.body.login === 'fedor' && req.body.password === '123456') res.send('Вы вошли в систему!');

  res.send('Неверные учётные данные!');
});

app.listen(3000);

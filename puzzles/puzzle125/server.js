// подключаем экспресс
const express = require('express');
// создаем экземпляр приложения
const app = express();
// запускаем сервер
app.listen(3000);
// создаем обработчик обращения
app.get('/json', (req, res) => {
  res.send({ message: 'Hello!' });
});

// импортируем библиотеку экспресс
const express = require('express');
// создаем экземпляр приложения
const app = express();
// запускаем сервер на прослушивание порта 3000
app.listen(3000);
// создаем обработчик обращения на адрес
app.get('/query-as-string', (req, res) => {
  res.send(`${req.query}`);
});

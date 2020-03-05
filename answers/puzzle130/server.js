// Подключение библиотеки express
const express = require('express');

// Создание приложения express
const app = express();

// Роут, отвечающий на запрос GET /query-as-string
app.get('/query-as-string', (req, res) => {
  // Отправляем в ответ query-строку
  const questionIndex = req.url.indexOf('?');
  return res.send(questionIndex === -1 ? '' : req.url.slice(questionIndex));
});

// Запуск сервера по порту 3000
app.listen(3000);

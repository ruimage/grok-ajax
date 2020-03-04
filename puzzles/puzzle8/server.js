// Подключение модуля fs на промисах
const fs = require('fs').promises;
// Подключение модуля для работы с путями
const path = require('path');
// Подключение библиотеки express
const express = require('express');

// Создание приложения express
const app = express();

// Роут, отвечающий на запрос GET /readme
app.get('/readme', async (req, res) => {
  const readme = await fs.readFile(path.join(__dirname, '../../puzzles/puzzle8/README8.md'), 'utf8');
  // Отправляем в ответ содержимое README8
  return res.send(readme);
});

// Запуск сервера по порту 3000
app.listen(3000);

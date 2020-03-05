// Подключение библиотеки express
const express = require('express');

// Создание приложения express
const app = express();

// Роут, отвечающий на запрос GET /page1
app.get('/page1', (req, res) => res.send('Страница 1'));

// Роут, отвечающий на запрос GET /page2
app.get('/page2', (req, res) => res.send('Страница 2'));

// Запуск сервера по порту 3000
app.listen(3000);

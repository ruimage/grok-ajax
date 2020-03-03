// Подключение библиотеки express
const express = require('express');

// Создание приложения express
const app = express();

// Роут, отвечающий на запрос GET /
app.get('/', (req, res) => res.send('Hello!'));

// Запуск сервера по порту 3000
app.listen(3000);

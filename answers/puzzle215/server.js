// Подключаем babel для работы с jsx
require('@babel/register');

// Подключение библиотеки express
const express = require('express');

// Создание приложения express
const app = express();

// Подключение middleware, который парсит BODY от HTML-формы
app.use(express.urlencoded({ extended: true }));

// Устанавливаем внутреннюю переменную express-приложения
// Эта переменная подключает шаблонизатор Handlebars
app.set('view engine', 'hbs');

// Роут, отвечающий на запрос GET /
app.get('/', (req, res) => {
  // Рендерим шаблон index.hbs
  return res.render('index');
});

// Роут, отвечающий на запрос POST /hello
app.post('/hello', (req, res) => {
  // Рендерим шаблон hello.hbs
  return res.render('hello', {
    // Передаём в шаблон введённое имя
    name: req.body.name,
  });
});

// Запуск сервера по порту 3000
app.listen(3000);

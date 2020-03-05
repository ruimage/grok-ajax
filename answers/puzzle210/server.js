// Подключение библиотеки express
const express = require('express');

// Создание приложения express
const app = express();

// Устанавливаем внутреннюю переменную express-приложения
// Эта переменная подключает шаблонизатор Handlebars
app.set('view engine', 'hbs');

// Роут, отвечающий на запрос GET /
app.get('/', (req, res) => {
  // Рендерим шаблон index.hbs
  return res.render('index', {
    // Передаём в шаблон значение query.name с названием name
    name: req.query.name,
  });
});

// Запуск сервера по порту 3000
app.listen(3000);

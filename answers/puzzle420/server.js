// Подключение библиотеки express
const express = require('express');

// Создание приложения express
const app = express();

// Подключение middleware, который отдаёт клиенту файлы из папки
app.use(express.static('public'));

// Подключение middleware, который парсит JSON от клиента
app.use(express.json());

// Устанавливаем внутреннюю переменную express-приложения
// Эта переменная подключает шаблонизатор Handlebars
app.set('view engine', 'hbs');

// Роут, отвечающий на запрос GET /
app.get('/', (req, res) => {
  // Рендерим шаблон index.hbs
  return res.render('index');
});

app.locals.count = 0;
// Роут, отвечающий на запрос GET /next
app.get('/next', (req, res) => {
  res.json({
    count: app.locals.count,
  });
  app.locals.count += 1;
});

// Запуск сервера по порту 3000
app.listen(3000);

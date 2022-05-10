// Подключаем babel для работы с jsx
require('@babel/register');

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

// Роут, отвечающий на запрос GET /login
app.get('/login', (req, res) => {
  // Рендерим шаблон login.hbs
  return res.render('login');
});

// Роут, отвечающий на запрос POST /login
app.post('/login', (req, res) => {
  // Если логин и пароль корректный
  if (req.body.login === 'fedor' && req.body.password === '123456') {
    // Отдаём клиенту флаг успешной аутентификации
    return res.json({
      authenticated: true,
    });
  }
  // Если логин некорректный, отдаём клиенту флаг неуспешной аутентификации
  return res.json({
    authenticated: false,
  });
});

// Запуск сервера по порту 3000
app.listen(3000);

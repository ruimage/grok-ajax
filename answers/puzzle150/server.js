// Подключение библиотеки express
const express = require('express');

// Создание приложения express
const app = express();

// Подключение middleware, который парсит BODY от HTML-формы
app.use(express.urlencoded({ extended: true }));

// Роут, отвечающий на запрос PUT /replace
app.put('/replace', (req, res) => {
  // Вытаскиваем имя из формы с помощью деструктуризации body
  const { name } = req.body;
  // Проверяем, что пользователь ввёл корректные данные
  if (name === 'fedor') {
    // Отправляем ответ для Фёдора
    return res.send('OK');
  }
  // Если это не Фёдор, отдаём что-то другое
  return res.send('BAD');
});

// Запуск сервера по порту 3000
app.listen(3000);

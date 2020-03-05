// Подключение библиотеки express
const express = require('express');

// Создание приложения express
const app = express();

// Подключение middleware, который парсит BODY от HTML-формы
app.use(express.urlencoded({ extended: true }));

// Роут, отвечающий на запрос DELETE /delete
app.delete('/delete', (req, res) => {
  // Вытаскиваем имя из формы с помощью деструктуризации body
  const { name } = req.body;
  // Если это Даня
  if (name === 'danya') {
    // Отправляем ответ для Дани
    return res.send('Удалено');
  }
  // Если это не Даня, отдаём что-то другое
  return res.send('Не могу удалить');
});

// Запуск сервера по порту 3000
app.listen(3000);

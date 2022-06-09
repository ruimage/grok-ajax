// импортируем библиотеку экспресса
const express = require('express');
// импортируем бибилиотеку для работы с файловой системы на основе промисов
const fs = require('fs').promises;

// создаем эксземпляр сервера
const app = express();
// подключаем сервер на прослушивание порта 3000
app.listen(3000);

// реализовываем обработчик
app.get('/readme', async (req, res) => {
  try {
    // читаем файл с диска
    const fileData = await fs.readFile('./README135.md', 'utf8');
    // отправляем данные файла с диска в виде строки
    res.send(fileData);
  } catch (e) {
    console.log(e);
  }
});

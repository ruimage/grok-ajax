//импортируем экспресс в файл
const express = require('express');

//создаем новый сервер  из экспресса
const app = express();

//включаем сервер и устанавливаем на прослушивание порта 3000
app.listen(3000, () => 'server started on 3000');

// подключаем бабель для работы с jsx
require('@babel/register');

// подключаем экспресс
const express = require('express');
// подключаем реакт
const React = require('react');
// подключаем объект которые позволяет рендерить реакт размертку в хтмл на сервере
const ReactDomServer = require('react-dom/server');
const { urlencoded } = require('express');
const Main = require('./Main');

const app = express();

app.use(urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const comp = React.createElement(Main);
  const html = ReactDomServer.renderToStaticMarkup(comp);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

app.listen(3000);

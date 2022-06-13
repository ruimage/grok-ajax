require('@babel/register');

const express = require('express');
const { urlencoded } = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const Main = require('./views/Main');

const app = express();

app.use(urlencoded({ extended: true }));

app.listen(3000);

app.get('/', (req, res) => {
  const main = React.createElement(Main);
  const html = ReactDOMServer.renderToStaticMarkup(main);
  res.write('!<DOCTYPE html>');
  res.end(html);
});

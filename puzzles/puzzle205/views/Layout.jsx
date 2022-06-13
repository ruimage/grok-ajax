const React = require('react');

module.exports = function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Фёдор-фермер</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

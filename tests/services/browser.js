const url = require('url');

/**
 * Формирует URL до страницы
 * @param {string} path Путь до страницы
 */
function makeUrl(path = '/') {
  return url.resolve(global.url, path);
}

module.exports = {
  makeUrl,
};

const url = require('url');
const puppeteer = require('puppeteer');

/**
 * Запускаем эмулятор браузера
 * @param {string} path Путь до страницы
 */
async function start(path = '/') {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url.resolve(global.url, path));
  if (process.env.TEST_MODE === 'development') {
    await page.screenshot({ path: 'last-browser-screen.png' });
  }
  return Promise.resolve({
    page,
    close: browser.close.bind(browser),
  });
}

module.exports = {
  start,
};

const puppeteer = require('puppeteer');

/**
 * Запускаем эмулятор браузера
 */
async function start() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(global.url);
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

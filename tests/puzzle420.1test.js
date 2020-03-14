describe('Puzzle 420', () => {
  global.testSanity('puzzle420');
  describe('Исходный код', () => {
    it('использует шаблонизатор и статику', async () => {
      const src = await global.getSource('puzzle420', 'server.js');
      expect(src).toContain('express.static');
      expect(src).toContain('public');
      expect(src).toContain('.render(');
      expect(src).toContain('app.locals.count');
    });
    it('шаблон index.hbs корректный', async () => {
      const src = await global.getSource('puzzle420', 'views/index.hbs');
      expect(src).toContain('<h1>Кусочек</h1>');
      expect(src).toContain('id="count"');
      expect(src).toContain('Следующий');
      expect(src).toContain('button');
    });
    it('шаблон layout.hbs корректный', async () => {
      const src = await global.getSource('puzzle420', 'views/layout.hbs');
      expect(src).toContain('/js/client.js');
      expect(src).toContain('<script');
      expect(src).toContain('defer');
      expect(src).toContain('{{{body}}}');
    });
    it('client.js корректный', async () => {
      const src = await global.getSource('puzzle420', 'public/js/client.js');
      expect(src).toContain('document.');
      expect(src).toContain('addEventListener');
      expect(src).not.toContain('preventDefault()');
      expect(src).toContain('fetch');
    });
  });
  describe('Главная страница', () => {
    let page;
    let closeBrowser;
    beforeAll(async () => {
      const data = await global.browser('/');
      page = data.page;
      closeBrowser = data.close;
    });
    it('счетчик изначально пустой', async () => {
      const count = await page.$eval('#count', (el) => el.innerText);
      expect(count).toBe('');
    });
    it('после первого нажатия счетчик равен 1', async () => {
      await page.click('button');
      await page.waitFor(1000);
      const count = await page.$eval('#count', (el) => el.innerText);
      expect(count).toBe('1');
    });
    it('после второго нажатия счетчик равен 2', async () => {
      await page.click('button');
      await page.waitFor(1000);
      const count = await page.$eval('#count', (el) => el.innerText);
      expect(count).toBe('2');
    });
    afterAll(closeBrowser);
  });
  afterAll(() => global.puzzle420.kill());
});

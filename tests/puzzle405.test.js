describe('Puzzle 405', () => {
  global.testSanity('puzzle405');
  describe('Исходный код', () => {
    it('использует шаблонизато и статику', async () => {
      const src = await global.getSource('puzzle405', 'server.js');
      expect(src).toContain('express.static');
      expect(src).toContain('public');
      expect(src).toContain('.render(');
    });
    it('шаблон index.hbs корректный', async () => {
      const src = await global.getSource('puzzle405', 'views/index.hbs');
      expect(src).toContain('<h1>');
    });
    it('шаблон layout.hbs корректный', async () => {
      const src = await global.getSource('puzzle405', 'views/layout.hbs');
      expect(src).toContain('/js/client.js');
      expect(src).toContain('<script');
      expect(src).toContain('defer');
      expect(src).toContain('{{{body}}}');
    });
    it('client.js корректный', async () => {
      const src = await global.getSource('puzzle405', 'public/js/client.js');
      expect(src).toContain('document.');
      expect(src).toContain('.innerText');
      expect(src).toContain('Привет!');
    });
  });
  describe('Роут GET /', () => {
    it('изначально не выводит приветствия', async () => {
      const res = await global.fetch(`${global.url}/`);
      expect(res).not.toContain('Привет!');
    });
  });
  describe('Главная страница', () => {
    it('Показывает приветствие', async () => {
      const { page, close } = await global.browser();
      const h1 = await page.$eval('h1', (el) => el.innerText);
      expect(h1).toEqual('Привет!');
      await close();
    });
  });
  afterAll(() => global.puzzle405.kill());
});

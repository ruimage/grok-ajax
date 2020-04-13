describe('Puzzle 300', () => {
  global.testSanity('puzzle300');
  describe('Исходный код', () => {
    it('использует шаблонизатор и статику', async () => {
      const src = await global.getSource('puzzle300', 'server.js');
      expect(src).toContain('express.static');
      expect(src).toContain('public');
      expect(src).toContain('.render(');
    });
    it('стиль корректный', async () => {
      const src = await global.getSource('puzzle300', 'public/style.css');
      expect(src).toContain('font-size');
      expect(src).toContain('72pt');
      expect(src).toContain('body');
    });
    it('шаблон index.hbs корректный', async () => {
      const src = await global.getSource('puzzle300', 'views/index.hbs');
      expect(src.trim()).toEqual('Привет!');
    });
    it('шаблон layout.hbs корректный', async () => {
      const src = await global.getSource('puzzle300', 'views/layout.hbs');
      expect(src).toContain('/style.css');
      expect(src).toContain('{{{body}}}');
    });
  });
  describe('Роут GET /', () => {
    it('выводит нужный текст', async () => {
      const res = await global.fetch(`${global.url}/`);
      expect(res).toContain('Привет!');
    });
  });
  afterAll(() => global.puzzle300.kill());
});

describe('Puzzle 400', () => {
  global.testSanity('puzzle400');
  describe('Исходный код', () => {
    it('использует шаблонизато и статику', async () => {
      const src = await global.getSource('puzzle400', 'server.js');
      expect(src).toContain('express.static');
      expect(src).toContain('public');
      expect(src).toContain('.render(');
    });
    it('шаблон index.hbs корректный', async () => {
      const src = await global.getSource('puzzle400', 'views/index.hbs');
      expect(src).toEqual('Привет!');
    });
    it('шаблон layout.hbs корректный', async () => {
      const src = await global.getSource('puzzle400', 'views/layout.hbs');
      expect(src).toContain('/js/client.js');
      expect(src).toContain('<script');
      expect(src).toContain('{{{body}}}');
    });
    it('client.js корректный', async () => {
      const src = await global.getSource('puzzle400', 'public/js/client.js');
      expect(src).toContain('alert');
      expect(src).toContain('Это клиентский скрипт!');
    });
  });
  describe('Роут GET /', () => {
    it('выводит текст', async () => {
      const res = await global.fetch(`${global.url}/`);
      expect(res).toContain('Привет!');
    });
  });
  afterAll(() => global.puzzle400.kill());
});

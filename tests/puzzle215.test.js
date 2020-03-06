describe('Puzzle 215', () => {
  global.testSanity('puzzle215');
  describe('Исходный код', () => {
    it('использует шаблонизатор', async () => {
      const src = await global.getSource('puzzle215', 'server.js');
      expect(src).toContain('.render(');
    });
    it('шаблон index.hbs корректный', async () => {
      const src = await global.getSource('puzzle215', 'views/index.hbs');
      expect(src).toContain('<form');
      expect(src).toContain('action=');
      expect(src).toContain('name=');
      expect(src).not.toContain('this');
    });
    it('шаблон hello.hbs корректный', async () => {
      const src = await global.getSource('puzzle215', 'views/hello.hbs');
      expect(src).toContain('{{');
      expect(src).toContain('}}');
      expect(src).not.toContain('this');
    });
  });
  describe('Роут GET /', () => {
    it('выводит форму', async () => {
      const res = await global.fetch(`${global.url}/`);
      expect(res).toContain('<form');
      expect(res).toContain('action=');
      expect(res).toContain('name=');
    });
  });
  describe('Роут POST /hello', () => {
    it('выводит корректный текст', async () => {
      const name = encodeURIComponent('Фёдор');
      const res = await global.fetch(`${global.url}/hello`, `name=${name}`);
      expect(res).toEqual('Привет, Фёдор!');
    });
  });
  afterAll(() => global.puzzle215.kill());
});

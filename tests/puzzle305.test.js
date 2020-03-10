describe('Puzzle 305', () => {
  global.testSanity('puzzle305');
  describe('Исходный код', () => {
    it('использует шаблонизатор и статику', async () => {
      const src = await global.getSource('puzzle305', 'server.js');
      expect(src).toContain('express.static');
      expect(src).toContain('public');
      expect(src).toContain('.render(');
    });
    it('стиль корректный', async () => {
      const src = await global.getSource('puzzle305', 'public/styles/style.css');
      expect(src).toContain('background-color');
    });
    it('картинка корректная', async () => {
      const src = await global.getSource('puzzle305', 'public/images/logo.svg');
      expect(src).toContain('<circle');
    });
    it('шаблон index.hbs корректный', async () => {
      const src = await global.getSource('puzzle305', 'views/index.hbs');
      expect(src).toContain('<img');
      expect(src).toContain('logo.svg');
    });
    it('шаблон layout.hbs корректный', async () => {
      const src = await global.getSource('puzzle305', 'views/layout.hbs');
      expect(src).toContain('/style.css');
      expect(src).toContain('{{{body}}}');
    });
  });
  describe('Роут GET /', () => {
    it('выводит картинку', async () => {
      const res = await global.fetch(`${global.url}/`);
      expect(res).toContain('img');
      expect(res).toContain('src');
      expect(res).toContain('/images/logo.svg');
    });
  });
  afterAll(() => global.puzzle305.kill());
});

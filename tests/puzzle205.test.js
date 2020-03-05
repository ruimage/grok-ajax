describe('Puzzle 205', () => {
  global.testSanity('puzzle205');
  describe('Исходный код', () => {
    it('использует шаблонизатор', async () => {
      const src = await global.getSource('puzzle205', 'server.js');
      expect(src).toContain('.render(');
    });
    it('использует шаблон', async () => {
      const src = await global.getSource('puzzle205', 'views/layout.hbs');
      expect(src).toContain('{{{body}}}');
    });
  });
  describe('Роут GET /', () => {
    it('отдаёт Привет!', async () => {
      const res = await global.fetch(`${global.url}/`);
      expect(res).toContain('Привет!');
    });
    it('содержит корректный title', async () => {
      const res = await global.fetch(`${global.url}/`);
      expect(res).toContain('<title>Фёдор-фермер</title>');
    });
  });
  afterAll(() => global.puzzle205.kill());
});

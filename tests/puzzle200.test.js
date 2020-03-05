describe('Puzzle 200', () => {
  global.testSanity('puzzle200');
  describe('Исходный код', () => {
    it('использует шаблонизатор', async () => {
      const serverSource = await global.getSource('puzzle200', 'server.js');
      expect(serverSource).toContain('.render(');
    });
  });
  describe('Роут GET /', () => {
    it('отдаёт Привет!', async () => {
      const res = await global.fetch(`${global.url}/`);
      expect(res).toEqual('Привет!');
    });
  });
  afterAll(() => global.puzzle200.kill());
});

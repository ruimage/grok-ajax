describe('Puzzle 3', () => {
  global.testSanity('puzzle3');
  describe('Роут GET /page1', () => {
    it('Отвечает "Страница 1"', async () => {
      const res = await global.fetch(`${global.url}/page1`);
      expect(res).toEqual('Страница 1');
    });
  });
  describe('Роут GET /page2', () => {
    it('Отвечает "Страница 2"', async () => {
      const res = await global.fetch(`${global.url}/page2`);
      expect(res).toEqual('Страница 2');
    });
  });
  afterAll(() => global.puzzle3.kill());
});

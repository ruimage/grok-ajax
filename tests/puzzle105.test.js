describe('Puzzle 105', () => {
  global.testSanity('puzzle105');
  describe('Роут GET /', () => {
    it('Отвечает корректно', async () => {
      const res = await global.fetch(`${global.url}/`);
      expect(res).toEqual('Hello!');
    });
  });
  afterAll(() => global.puzzle105.kill());
});

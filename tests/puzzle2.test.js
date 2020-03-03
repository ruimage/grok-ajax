describe('Puzzle 2', () => {
  global.testSanity('puzzle2');
  describe('Роут GET /', () => {
    it('Отвечает корректно', async () => {
      const res = await global.fetch(`${global.url}/`);
      expect(res).toEqual('Hello!');
    });
  });
  afterAll(() => global.puzzle2.kill());
});

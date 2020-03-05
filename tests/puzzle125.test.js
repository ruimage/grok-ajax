describe('Puzzle 125', () => {
  global.testSanity('puzzle125');
  describe('Роут GET /json', () => {
    it('Отдаёт правильный JSON', async () => {
      const res = await global.fetch(`${global.url}/json`);
      expect(res).toEqual('{"message":"Hello!"}');
    });
  });
  afterAll(() => global.puzzle125.kill());
});

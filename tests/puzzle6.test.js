describe('Puzzle 6', () => {
  global.testSanity('puzzle6');
  describe('Роут GET /json', () => {
    it('Отдаёт правильный JSON', async () => {
      const res = await global.fetch(`${global.url}/json`);
      expect(res).toEqual('{"message":"Hello!"}');
    });
  });
  afterAll(() => global.puzzle6.kill());
});

describe('Puzzle 120', () => {
  global.testSanity('puzzle120');
  describe('Роут GET /answer', () => {
    it('Отдаёт нужное число', async () => {
      const res = await global.fetch(`${global.url}/answer`);
      expect(res).toEqual('42');
    });
  });
  afterAll(() => global.puzzle120.kill());
});

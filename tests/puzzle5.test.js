describe('Puzzle 5', () => {
  global.testSanity('puzzle5');
  describe('Роут GET /answer', () => {
    it('Отдаёт нужное число', async () => {
      const res = await global.fetch(`${global.url}/answer`);
      expect(res).toEqual('42');
    });
  });
  afterAll(() => global.puzzle5.kill());
});

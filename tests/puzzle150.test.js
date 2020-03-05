describe('Puzzle 150', () => {
  global.testSanity('puzzle150');
  describe('Роут PUT /replace', () => {
    it('отдаёт для Фёдора ОК', async () => {
      const res = await global.fetch(`${global.url}/replace`, 'name=fedor', { method: 'PUT' });
      expect(res).toEqual('OK');
    });
    it('отдаёт для всех остальных BAD', async () => {
      const res = await global.fetch(`${global.url}/replace`, 'name=danya', { method: 'PUT' });
      expect(res).toEqual('BAD');
    });
  });
  afterAll(() => global.puzzle150.kill());
});

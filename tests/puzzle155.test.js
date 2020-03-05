describe('Puzzle 155', () => {
  global.testSanity('puzzle155');
  describe('Роут DELETE /delete', () => {
    it('удаляет Даню', async () => {
      const res = await global.fetch(`${global.url}/delete`, 'name=danya', { method: 'DELETE' });
      expect(res).toEqual('Удалено');
    });
    it('не удаляет остальных', async () => {
      const res = await global.fetch(`${global.url}/delete`, 'name=fedor', { method: 'DELETE' });
      expect(res).toEqual('Не могу удалить');
    });
  });
  afterAll(() => global.puzzle155.kill());
});

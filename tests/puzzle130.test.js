describe('Puzzle 130', () => {
  global.testSanity('puzzle130');
  describe('Роут GET /query-as-string', () => {
    it('работает для пустого query', async () => {
      const res = await global.fetch(`${global.url}/query-as-string`);
      expect(res).toEqual('');
    });
    it('работает для ?', async () => {
      const res = await global.fetch(`${global.url}/query-as-string?`);
      expect(res).toEqual('?');
    });
    it('работает для одного параметра', async () => {
      const res = await global.fetch(`${global.url}/query-as-string?name=Fedor`);
      expect(res).toEqual('?name=Fedor');
    });
    it('работает для двух параметров', async () => {
      const res = await global.fetch(`${global.url}/query-as-string?name=Fedor&password=123`);
      expect(res).toEqual('?name=Fedor&password=123');
    });
  });
  afterAll(() => global.puzzle130.kill());
});

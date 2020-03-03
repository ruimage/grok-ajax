describe('Puzzle 4', () => {
  global.testSanity('puzzle4');
  describe('Роут GET /query-as-object', () => {
    it('Обрабатывает пустой запрос', async () => {
      const res = await global.fetch(`${global.url}/query-as-object`);
      expect(res).toEqual('{}');
    });
    it('Обрабатывает запрос с одной переменной', async () => {
      const res = await global.fetch(`${global.url}/query-as-object?name=Fedor`);
      expect(res).toEqual('{"name":"Fedor"}');
    });
    it('Обрабатывает запрос с двумя переменными', async () => {
      const res = await global.fetch(`${global.url}/query-as-object?name=Fedor&password=123456`);
      expect(res).toEqual('{"name":"Fedor","password":"123456"}');
    });
  });
  afterAll(() => global.puzzle4.kill());
});

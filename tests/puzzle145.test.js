describe('Puzzle 145', () => {
  global.testSanity('puzzle145');
  describe('Роут GET /login', () => {
    it('отдаёт корректную форму', async () => {
      const res = await global.fetch(`${global.url}/login`);
      expect(res).toContain('<form');
      expect(res).toContain('method="POST"');
      expect(res).toContain('<input');
      expect(res).toContain('type="text"');
      expect(res).toContain('type="password"');
      expect(res).toContain('name="login"');
      expect(res).toContain('name="password"');
      expect(res).toContain('<button');
    });
    it('даёт возможность войти Фёдору', async () => {
      const res = await global.fetch(`${global.url}/login`, 'login=fedor&password=123456');
      expect(res).toEqual('Вы вошли в систему!');
    });
    it('блокирует некорректных пользователей', async () => {
      const res = await global.fetch(`${global.url}/login`, 'login=danya&password=aaa');
      expect(res).toEqual('Неверные учётные данные!');
    });
  });
  afterAll(() => global.puzzle145.kill());
});

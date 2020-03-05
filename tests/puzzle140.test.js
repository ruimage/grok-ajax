describe('Puzzle 140', () => {
  global.testSanity('puzzle140');
  describe('Роут GET /login', () => {
    it('отдаёт корректную форму', async () => {
      const res = await global.fetch(`${global.url}/login`);
      expect(res).toContain('<form');
      expect(res).toContain('<input');
      expect(res).toContain('type="text"');
      expect(res).toContain('type="password"');
      expect(res).toContain('name="login"');
      expect(res).toContain('name="password"');
      expect(res).toContain('<button');
    });
  });
  afterAll(() => global.puzzle140.kill());
});

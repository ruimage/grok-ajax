describe('Puzzle 415', () => {
  global.testSanity('puzzle415');
  describe('Исходный код', () => {
    it('использует шаблонизатор и статику', async () => {
      const src = await global.getSource('puzzle415', 'server.js');
      expect(src).toContain('express.static');
      expect(src).toContain('public');
      expect(src).toContain('.render(');
    });
    it('шаблон login.hbs корректный', async () => {
      const src = await global.getSource('puzzle415', 'views/login.hbs');
      expect(src).toContain('<form');
      expect(src).toContain('button');
      expect(src).toContain('input');
      expect(src).toContain('name="login"');
      expect(src).toContain('name="password"');
      expect(src).toContain('type="password"');
    });
    it('шаблон layout.hbs корректный', async () => {
      const src = await global.getSource('puzzle415', 'views/layout.hbs');
      expect(src).toContain('/js/client.js');
      expect(src).toContain('<script');
      expect(src).toContain('defer');
      expect(src).toContain('{{{body}}}');
    });
    it('client.js корректный', async () => {
      const src = await global.getSource('puzzle415', 'public/js/client.js');
      expect(src).toContain('document.');
      expect(src).toContain('addEventListener');
      expect(src).toContain('preventDefault()');
      expect(src).toContain('fetch');
    });
  });
  describe('Страница входа', () => {
    it('содержит форму входа', async () => {
      const res = await global.fetch(`${global.url}/login`);
      expect(res).toContain('<form');
      expect(res).toContain('name="login"');
      expect(res).toContain('name="password"');
    });
    it('выводит ошибку входа при неверном логине', async () => {
      const { page, close } = await global.browser('/login');
      page.on('dialog', async (dialog) => {
        expect(dialog.message()).toEqual('Ошибка входа.');
        await dialog.dismiss();
        await close();
      });
      const loginInput = await page.$('input[name="login"]');
      await loginInput.type('danya');
      await page.click('button[type="submit"]');
    });
    it('оповещает об успехе при правильном логине', async () => {
      const { page, close } = await global.browser('/login');
      page.on('dialog', async (dialog) => {
        expect(dialog.message()).toEqual('Успешный вход!');
        await dialog.dismiss();
        await close();
      });
      const loginInput = await page.$('input[name="login"]');
      await loginInput.type('fedor');
      const passwordInput = await page.$('input[name="password"]');
      await passwordInput.type('123456');
      await page.click('button[type="submit"]');
    });
  });
  afterAll(() => global.puzzle415.kill());
});

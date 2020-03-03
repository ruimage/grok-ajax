const { portIsBusy } = require('./server');

// Поверхностные проверки на адекватность
function testSanity(puzzleName) {
  global[puzzleName] = {};
  return new Promise((resolve) => {
    it('Код похож на эталонный код', async () => {
      const grade = await global.gradeSource(puzzleName);
      expect(grade).toBeGreaterThan(process.env.GRADE_THRESHOLD || 0.7);
    });
    it('Порт свободен перед запуском задачи', async () => {
      expect(await portIsBusy(process.env.PORT || 3000)).toBe(false);
    });
    it('Сервер успешно запускается', async () => {
      const kill = await global.runPuzzle(puzzleName);
      expect(kill).toBeInstanceOf(Function);
      global[puzzleName].kill = kill;
      resolve(kill);
    });
  });
}

module.exports = {
  testSanity,
};

// Поверхностные проверки на адекватность
global.testSanity = (puzzleName) => {
  it('Код похож на эталонный код', async () => {
    const grade = await global.gradeSource(puzzleName);
    expect(grade).toBeGreaterThan(process.env.GRADE_THRESHOLD || 0.7);
  });
  it('Сервер успешно запускается', async () => {
    const kill = await global.runPuzzle(puzzleName);
    expect(kill).toBeInstanceOf(Function);
    kill();
  });
};

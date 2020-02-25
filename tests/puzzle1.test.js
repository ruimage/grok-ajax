describe('Puzzle 1', () => {
  it('Код правдоподобен', async () => {
    const grade = await global.gradeSource('puzzle1');
    expect(grade).toBeGreaterThan(0.8);
  });
});

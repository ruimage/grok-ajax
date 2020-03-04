const fs = require('fs').promises;
const path = require('path');

describe('Puzzle 8', () => {
  global.testSanity('puzzle8');
  describe('Роут GET /readme', () => {
    it('отдаёт README', async () => {
      const res = await global.fetch(`${global.url}/readme`);
      const file = await fs.readFile(path.join(__dirname, '../puzzles/puzzle8/README8.md'), 'utf8');
      expect(res).toEqual(file);
    });
  });
  afterAll(() => global.puzzle8.kill());
});

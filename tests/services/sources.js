const fs = require('fs').promises;

/**
 * Достаёт исходный код
 * @param {string} puzzleName Название задачи
 * @param {string} fileName Название файла
 */
function getSource(puzzleName, fileName) {
  const puzzlesDir = process.env.TEST_MODE === 'development'
    ? 'answers'
    : 'puzzles';
  const path = `./${puzzlesDir}/${puzzleName}/${fileName}`;
  return fs.readFile(path, 'utf8');
}

module.exports = {
  getSource,
};

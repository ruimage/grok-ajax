const path = require('path');
const fs = require('fs').promises;
const { compareTwoStrings } = require('string-similarity');

const logger = console;

/**
 * Рассчитывает оценку похожести двух файлов с кодом
 * @param {string} fileA Файл А
 * @param {string} fileB Файл Б
 */
async function compareSources(fileA, fileB) {
  try {
    const files = await Promise.all([
      fs.readFile(fileA, 'utf8'),
      fs.readFile(fileB, 'utf8'),
    ]);
    return compareTwoStrings(...files);
  } catch (err) {
    logger.error(err);
    return 0;
  }
}

/**
 * Рассчитывает оценку похожести кода
 */
global.gradeSource = async (taskName) => {
  const filesToCompare = ['server.js'];
  const grades = await Promise.all(filesToCompare.map(async (fileName) => {
    const baseFile = path.join(__dirname, `../answers/${taskName}/${fileName}`);
    const destFile = path.join(__dirname, `../${taskName}/${fileName}`);
    return compareSources(baseFile, destFile);
  }));
  return grades.reduce((acc, grade) => acc + grade / filesToCompare.length, 0);
};

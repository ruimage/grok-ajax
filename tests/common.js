const path = require('path');
const fs = require('fs').promises;
const stringSimilarity = require('string-similarity');

async function compareSources(fileA, fileB) {
  console.log(fileA, fileB);
  try {
    const files = await Promise.all([
      fs.readFile(fileA, 'utf8'),
      fs.readFile(fileB, 'utf8'),
    ]);
  } catch (e) {
    console.log(e);
  }
  return 2;
}

global.gradeSource = (taskName) => {
  const filesToCompare = ['server.js'];
  return filesToCompare.reduce((acc, fileName) => {
    const baseFile = path.join(__dirname, `../answers/${taskName}/${fileName}`);
    const destFile = path.join(__dirname, `../${taskName}/${fileName}`);
    return acc + compareSources(baseFile, destFile) / filesToCompare.length;
  }, 0);
};

console.log('>>>>>>>>>>>>>', global.gradeSource('puzzle1'));

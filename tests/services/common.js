const { gradeSource } = require('./grader');
const { testSanity } = require('./test-sanity');
const { runPuzzle } = require('./server');
const { fetch } = require('./fetch');

global.gradeSource = gradeSource;
global.testSanity = testSanity;
global.runPuzzle = runPuzzle;
global.fetch = fetch;

global.url = `http://localhost:${process.env.PUZZLE_PORT || 3000}`;

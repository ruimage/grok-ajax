const { gradeSource } = require('./grader');
const { testSanity } = require('./test-sanity');
const { runPuzzle } = require('./server');
const { fetch } = require('./fetch');
const { getSource } = require('./sources');
const { start } = require('./browser');

global.gradeSource = gradeSource;
global.testSanity = testSanity;
global.runPuzzle = runPuzzle;
global.fetch = fetch;
global.getSource = getSource;
global.browser = start;

global.url = `http://localhost:${process.env.PUZZLE_PORT || 3000}`;

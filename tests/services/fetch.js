const nodeFetch = require('node-fetch');

async function fetch(url, body, responseFormat = 'text') {
  const response = await nodeFetch(
    url,
    {
      body,
    },
  );
  return responseFormat === 'text'
    ? response.text()
    : response.json();
}

module.exports = {
  fetch,
};

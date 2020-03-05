const nodeFetch = require('node-fetch');

async function fetch(url, body, { method, responseFormat = 'text' } = {}) {
  const response = await nodeFetch(
    url,
    {
      method: method || (body ? 'POST' : 'GET'),
      body: typeof body === 'string' ? body : JSON.stringify(body),
    },
  );
  return responseFormat === 'text'
    ? response.text()
    : response.json();
}

module.exports = {
  fetch,
};

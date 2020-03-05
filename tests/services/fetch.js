const nodeFetch = require('node-fetch');

async function fetch(url, body, { method, headers, responseFormat = 'text' } = {}) {
  const response = await nodeFetch(
    url,
    {
      method: method || (body ? 'POST' : 'GET'),
      body: typeof body === 'string' ? body : JSON.stringify(body),
      headers: typeof body === 'string'
        ? {
          'Content-Type': 'application/x-www-form-urlencoded',
          ...headers,
        }
        : headers,
    },
  );
  return responseFormat === 'text'
    ? response.text()
    : response.json();
}

module.exports = {
  fetch,
};

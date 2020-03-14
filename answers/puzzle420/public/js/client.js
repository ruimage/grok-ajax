const countElement = document.getElementById('count');
document.querySelector('button').addEventListener('click', async () => {
  let jsonResponse;
  try {
    const response = await fetch('/next');
    jsonResponse = await response.json();
  } catch (e) {
    return console.error(e);
  }
  countElement.innerText = jsonResponse.count;
});

document.login.addEventListener('submit', async (event) => {
  event.preventDefault();
  const {
    login: { value: login },
    password: { value: password },
    action,
    method,
  } = event.target;
  let jsonResponse;
  try {
    const response = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login,
        password,
      }),
    });
    jsonResponse = await response.json();
  } catch (e) {
    console.error(e);
  }
  if (jsonResponse && jsonResponse.authenticated) {
    return alert('Успешный вход!');
  }
  return alert('Ошибка входа.');
});

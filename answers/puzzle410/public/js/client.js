document.login.addEventListener('submit', (event) => {
  event.preventDefault();
  if (event.target.login.value === 'fedor') {
    return alert('Успешный вход!');
  }
  return alert('Ошибка входа.');
});

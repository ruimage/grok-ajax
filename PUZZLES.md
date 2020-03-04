# HTTP

1. ~~Минимальный HTTP сервер
1. ~~Роут GET / => Hello
1. ~~Два роута GET /page1, GET /page2
1. ~~Роут GET /query-as-object отдаёт объект Query
1. ~~Роут GET /answer отдаёт число 42
1. ~~Роут GET /json отдаёт JSON-объект {"message": "Hello!"}
1. ~~Роут GET /query-as-string отдаёт строку Query
1. Роут GET /get-readme считывает файл README и отдаёт его содержимое
1. Роут GET /form отрисовывает форму для ввода логина и пароля.
1. Роут GET /form отрисовывает форму для ввода логина и пароля. Роут POST /form выводит строку "Привет, <login>!".

# Шаблонизатор

1. Роут GET / делает render шаблона index.hbs "Привет!".
1. Роут GET /?name=Фёдор делает render шаблона index.hbs "Привет, <name>!"
1. В layout.hbs добавить html-шаблон. Сделать так, чтобы title в браузере был "Крутой тайтл".

# Statics

1. Подключить статику. Создать файл стилей styles.css. В layout.hbs добавить ссылку на файл стилей.
   В стилях сделать у body `font-size: 72pt`. Роут GET / делает render шаблона index.hbs. В шаблоне "Привет!".
1. 
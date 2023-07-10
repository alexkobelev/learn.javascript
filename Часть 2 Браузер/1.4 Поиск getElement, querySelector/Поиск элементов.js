// Поиск элементов
// важность: 4

// Вот документ с таблицей и формой.

// Как найти?…

// Таблицу с id="age-table".
document.getElementById('age-table');
// Все элементы label внутри этой таблицы (их три).
document.getElementById('age-table').getElementsByTagName('label');
// Первый td в этой таблице (со словом «Age»).
document.getElementById('age-table').rows[0].cells[0];
// Форму form с именем name="search".
document.getElementsByName('search')[0];
// Первый input в этой форме.
document.getElementsByName('search')[0].getElementsByTagName('input')[0];
// Последний input в этой форме.

// Откройте страницу table.html в отдельном окне и используйте для этого браузерные инструменты разработчика.

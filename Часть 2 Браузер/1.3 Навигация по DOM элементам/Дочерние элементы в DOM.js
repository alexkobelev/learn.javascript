// Дочерние элементы в DOM
// важность: 5

// Для страницы:

<html>
  <body>
    <div>Пользователи:</div>
    <ul>
      <li>Джон</li>
      <li>Пит</li>
    </ul>
  </body>
</html>;

// Напишите код, как получить…

//     элемент <div>?
//     <ul>?
//     второй <li> (с именем Пит)?

document.body.firstElementChild;
document.body.childNodes[1];

document.body.lastElementChild;
document.body.childNodes[3];

document.body.lastElementChild.lastElementChild;

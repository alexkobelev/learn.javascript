// https://learn.javascript.ru/task/output-single-linked-list-reverse
// Вывод односвязного списка в обратном порядке
// важность: 5

// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

// Сделайте два решения: с использованием цикла и через рекурсию.

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// РЕШЕНИЕ ЧЕРЕЗ РЕКУРСИЮ

function printListReccursionReverse(list) {
  if (list.next === null) {
    printListReccursionReverse(list.next);
  }
  console.log(list.value);
}

printListReccursionReverse(list);

// РЕШЕНИЕ ЧЕРЕЗ ЦИКЛ WHILE

function printListWhile(list) {
  let arr = [];
  let tmp = list;
  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }
  for (let item of arr.reverse()) {
    console.log(item);
  }
}

printListWhile(list);

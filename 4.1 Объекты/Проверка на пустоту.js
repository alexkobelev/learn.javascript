// Проверка на пустоту
// важность: 5

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Должно работать так:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

let schedule = {};
function isEmpty(obj) {
  let count = 0;
  for (let prop in obj) {
    count += 1;
    break;
  }
  return count > 0 ? true : false;
}
isEmpty(schedule);

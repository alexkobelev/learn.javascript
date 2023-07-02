// Оставить уникальные элементы массива
// важность: 4

// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

// Например:

// function unique(arr) {
//   /* ваш код */
// }

// let strings = [
//   'кришна',
//   'кришна',
//   'харе',
//   'харе',
//   'харе',
//   'харе',
//   'кришна',
//   'кришна',
//   ':-O',
// ];

// alert(unique(strings)); // кришна, харе, :-O

Ответ;

function unique(arr) {
  let uniqueArr = [];
  for (item of arr) {
    if (uniqueArr.find((element) => element === item)) {
      continue;
    } else {
      uniqueArr.push(item);
    }
  }
  return uniqueArr;
}

let strings = [
  'кришна',
  'кришна',
  'харе',
  'харе',
  'харе',
  'харе',
  'кришна',
  'кришна',
  ':-O',
];

console.log(unique(strings)); // кришна, харе, :-O

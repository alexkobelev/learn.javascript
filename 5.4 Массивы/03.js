// Вызов в контексте массива
// важность: 5

// Каков результат? Почему?

// let arr = ["a", "b"];

// arr.push(function() {
//   alert( this );
// });

// arr[2](); // ?

// ОТВЕТ:
// arr[2]() вызовет функцию alert( this )
// this в данном случае указывает на массив arr, а значит его нам и вернет

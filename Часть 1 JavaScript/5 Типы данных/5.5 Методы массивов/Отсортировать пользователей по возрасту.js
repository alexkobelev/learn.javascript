// Отсортировать пользователей по возрасту
// важность: 5

// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

// Например:

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя

// ОТВЕТ:

let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };
let pasha = { name: 'Паша', age: 1 };
let dasha = { name: 'Даша', age: 23 };
let gasha = { name: 'Гаша', age: 44 };
let asha = { name: 'Aша', age: 22 };
let vasha = { name: 'Bаша', age: 22 };

let arr = [vasya, petya, masha, pasha, dasha, gasha, asha, vasha];

function sortByAge(arr) {
  arr.sort((a, b) => Number(a.age) - Number(b.age));
}

sortByAge(arr);

// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя
console.log(arr);

// Перебираемые ключи
// важность: 5

// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.

// Но это не выходит:

let map = new Map();

map.set('name', 'John');

let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push('more');

// Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?

// ОТВЕТ:
// Не получется так сделать, потому что в переменной keys хранится ссылка не на массив, а на итерируемый объект. Из него нужно сделать массив с помощью Array.from()

let map1 = new Map();

map1.set('name', 'John');

let keys1 = Array.from(map1.keys());

keys1.push('more');

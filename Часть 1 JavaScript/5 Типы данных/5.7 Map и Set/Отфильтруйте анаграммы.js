// Отфильтруйте анаграммы
// важность: 4

// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

// Например:

// nap - pan
// ear - are - era
// cheaters - hectares - teachers

// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

// Например:

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"

// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

// ОТВЕТ:

// Первая итерация ответа. Немного недоработал. Возвращает просто уникальные строки (наборы букв).
function aclean(arr) {
  const sortedArr = arr.map((element) =>
    element.toLowerCase().split('').sort().join('')
  );
  const set = new Set(sortedArr);
  const filteredArr = Array.from(set);
  return filteredArr;
}

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"

// Вторая итерация. Возвращает нужный массив.
function bclean(arr) {
  let map = new Map();
  arr.forEach((str) => {
    map.set(str.toLowerCase().split('').sort().join(''), str);
  });
  return Array.from(map.values());
}

let arr2 = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

console.log(bclean(arr2));

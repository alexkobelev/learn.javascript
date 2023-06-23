// Перемешайте массив
// важность: 3

// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

// Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:

// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...

// Все последовательности элементов должны иметь одинаковую вероятность. Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая.

let arr = [1, 2, 3];

function shuffle(arr) {
  let shuffledArr = [];
  let tempArr = arr.slice();
  while (tempArr.length != 0) {
    let randomIndex = Math.floor(Math.random() * tempArr.length);
    shuffledArr.push(tempArr[randomIndex]);
    tempArr.splice(randomIndex, 1);
  }
  return shuffledArr;
}

let count = {
  123: 0,
  132: 0,
  213: 0,
  231: 0,
  321: 0,
  312: 0,
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  let shuffledArr = shuffle(array);
  count[shuffledArr.join('')]++;
}

// показать количество всех возможных вариантов
for (let key in count) {
  console.log(`${key}: ${count[key]}`);
}

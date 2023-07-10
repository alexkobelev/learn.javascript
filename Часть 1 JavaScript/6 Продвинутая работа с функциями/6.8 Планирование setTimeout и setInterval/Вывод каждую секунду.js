// Вывод каждую секунду
// важность: 5

// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

//     Используя setInterval.
//     Используя рекурсивный setTimeout.
function printNumbers(from, to) {
  let current = from;

  let timer = setInterval(function () {
    alert(current);
    if (current === to) {
      clearInterval(timer);
    }
    current++;
  }, 1000);
}
printNumbers(5, 10);

function printNumbersAgain(from, to) {
  let current = from;
  setTimeout(function num() {
    alert(current);
    if (current < to) {
      setTimeout(num, 1000);
    }
    current++;
  }, 3000);
}
printNumbersAgain(5, 10);

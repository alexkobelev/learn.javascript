// Независимы ли счётчики?
// важность: 5

// Здесь мы делаем два счётчика: counter и counter2, используя одну и ту же функцию makeCounter.

// Они независимы? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё?

function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert(counter()); // 0
alert(counter()); // 1

alert(counter2()); // ?
alert(counter2()); // ?

// ОТВЕТ:
// Счетчик 2 выведет 0 и 1 . Счетчики независимы так, как каджый счетчик исполняет свою отдельную функцию, со своим лексическим окружением

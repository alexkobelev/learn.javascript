// Сумма свойств объекта
// важность: 5

// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

// Если объект salaries пуст, то результат должен быть 0.

// Например:

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(obj) {
  sum = 0;
  for (let value of Object.values(obj)) {
    sum += value;
  }
  return sum;
}

alert(sumSalaries(salaries)); // 650

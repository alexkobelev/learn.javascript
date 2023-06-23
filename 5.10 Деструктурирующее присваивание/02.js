// Максимальная зарплата
// важность: 5

// У нас есть объект salaries с зарплатами:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

//     Если объект salaries пустой, то нужно вернуть null.
//     Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.

// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

// Ответ:
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {
  arr = Object.entries(salaries);

  let theRichiestPerson = null;
  let theMostSalary = 0;

  arr.forEach(([firstName, salary]) => {
    if (salary >= theMostSalary) {
      theMostSalary = salary;
      theRichiestPerson = firstName;
    }
  });

  return theRichiestPerson;
}

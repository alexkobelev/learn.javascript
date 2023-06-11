// Создайте калькулятор
// важность: 5

// Создайте объект calculator (калькулятор) с тремя методами:

//     read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
//     sum() (суммировать) возвращает сумму сохранённых значений.
//     mul() (умножить) перемножает сохранённые значения и возвращает результат.

// Мое решение (работает)
let calculator = {
  x: 0,
  y: 0,

  read: () => {
    this.x = prompt('Введите первое число:');
    this.y = prompt('Введите второе число:');
  },

  sum: () => {
    return this.x * 1 + this.y * 1;
  },

  mul: () => {
    return this.x * this.y;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// Решение с сайта

let calc = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  },
};

calc.read();
alert(calc.sum());
alert(calc.mul());

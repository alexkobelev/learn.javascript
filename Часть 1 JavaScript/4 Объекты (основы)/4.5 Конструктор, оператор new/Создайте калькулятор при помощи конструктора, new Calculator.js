// Создайте калькулятор при помощи конструктора, new Calculator
// важность: 5

// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

//     read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
//     sum() возвращает сумму этих свойств.
//     mul() возвращает произведение этих свойств.

// Например:

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// Ответ:

function Calculator() {
  this.read = function () {
    this.num1 = prompt('Введите первое число:');
    this.num2 = prompt('Введите второе число:');
  };

  this.sum = function () {
    return this.num1 * 1 + this.num2 * 1;
  };

  this.mul = function () {
    return this.num1 * this.num2;
  };
}

let calculator = new Calculator();
calculator.read();

alert('Sum=' + calculator.sum());
alert('Mul=' + calculator.mul());

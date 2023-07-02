// Две функции - один объект
// важность: 2

// Возможно ли создать функции A и B, чтобы new A() == new B()?

// function A() { ... }
// function B() { ... }

// let a = new A();
// let b = new B();

// alert( a == b ); // true

// Если да – приведите пример вашего кода.

Ответ:
let obj = { name: 'Mark' };

function A() {
  return obj;
}
function B() {
  return obj;
}

let a = new A();
let b = new B();

alert(a == b);

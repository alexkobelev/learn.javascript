// Цепь вызовов
// важность: 2

// У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:

let ladder = {
  step: 0,
  up() {
    ladder.step++;
    return this;
  },
  down() {
    ladder.step--;
    return this;
  },
  showStep() {
    // показывает текущую ступеньку
    alert(ladder.step);
    return this;
  },
};

// Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0

// Такой подход широко используется в библиотеках JavaScript.

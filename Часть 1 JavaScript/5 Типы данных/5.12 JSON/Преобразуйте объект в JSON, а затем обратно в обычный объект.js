// Преобразуйте объект в JSON, а затем обратно в обычный объект
// важность: 5

// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: 'Василий Иванович',
  age: 35,
};

user = JSON.stringify(user);

let admin = JSON.parse(user);
console.log(user);
console.log(admin);

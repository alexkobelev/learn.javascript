// Сделать первый символ заглавным
// важность: 5

// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

// ucFirst("вася") == "Вася";

// Ответ:

function ucFirst(str) {
  if (str === '') return str;
  return str[0].toUpperCase() + str.slice(1);
}

ucFirst('вася');

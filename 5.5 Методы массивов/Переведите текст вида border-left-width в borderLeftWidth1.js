// Переведите текст вида border-left-width в borderLeftWidth
// важность: 5

// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

function camelize(str) {
  const words = str.split('-');

  let camelizedWords = words.map((element, index) => {
    return index === 0
      ? element
      : element.slice(0, 1).toUpperCase() + element.slice(1);
  });

  return camelizedWords.join('');
}

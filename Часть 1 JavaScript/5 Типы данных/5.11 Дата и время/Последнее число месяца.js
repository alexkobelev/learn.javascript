// Последнее число месяца?
// важность: 5

// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

// Параметры:

//     year – год из четырёх цифр, например, 2012.
//     month – месяц от 0 до 11.

// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

// ОТВЕТ:

function getLastDayOfMonth(year, month) {
  return new Date(year, month + 1, 0);
}

getLastDayOfMonth(2012, 1);
getLastDayOfMonth(2012, 2);
getLastDayOfMonth(2012, 3);

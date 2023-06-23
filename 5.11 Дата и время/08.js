// Форматирование относительной даты
// важность: 4

// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

//     Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
//     В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
//     В противном случае, если меньше часа, вывести "m мин. назад".
//     В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

// Например:

// alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// // вчерашняя дата вроде 31.12.2016, 20:00
// alert( formatDate(new Date(new Date - 86400 * 1000)) );

// ОТВЕТ:
function formatDate(date) {
  const diff = new Date() - date;

  if (diff < 1000) {
    return 'прямо сейчас';
  } else if (Math.floor(diff / 1000) < 60) {
    return `${Math.floor(diff / 1000)} сек. назад`;
  } else if (Math.floor(diff / (1000 * 60)) < 60) {
    return `${Math.floor(diff / (1000 * 60))} мин. назад`;
  } else {
    const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
    const month = date.getMonth() > 9 ? date.getMonth() : `0${date.getMonth()}`;
    const year = date.getFullYear().toString().slice(2);
    const hour = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
    const minute =
      date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes}`;

    return `${day}.${month}.${year} ${hour}:${minute}`;
  }
}
alert(formatDate(new Date(new Date() - 1))); // "прямо сейчас"

alert(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"

alert(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert(formatDate(new Date(new Date() - 86400 * 1000)));

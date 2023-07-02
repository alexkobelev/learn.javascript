// Покажите день недели
// важность: 5

// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

// Например:

// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getWeekDay(date) );        // нужно вывести "ВТ"

let date = new Date(2012, 0, 3);
function getWeekDay(date) {
  let weekDay = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  return weekDay[date.getDay()];
}
alert(getWeekDay(date));

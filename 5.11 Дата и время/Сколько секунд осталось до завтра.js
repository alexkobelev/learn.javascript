// Сколько секунд осталось до завтра?
// важность: 5

// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

// Например, если сейчас 23:00, то:

// getSecondsToTomorrow() == 3600

// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
function getSecondsToTomorrow() {
  today = new Date();
  return (
    24 * 60 * 60 -
    today.getHours() * 3600 -
    today.getMinutes() * 60 -
    today.getSeconds()
  );
}

getSecondsToTomorrow();

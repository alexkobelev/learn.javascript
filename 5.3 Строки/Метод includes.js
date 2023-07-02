// Проверка на спам
// важность: 5

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

// Ответ:

function checkSpam(str) {
  return (
    str.toLowerCase().includes('xxx') || str.toLowerCase().includes('viagra')
  );
}

checkSpam('buy ViAgRA now');
checkSpam('free xxxxx');
checkSpam('innocent rabbit');

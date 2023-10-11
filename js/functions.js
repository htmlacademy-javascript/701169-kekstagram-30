// Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true,
// если строка меньше или равна указанной длине, и false, если строка длиннее.

function countSymbols (line, maxAmount) {
  const symbolsAmount = line.length;
  return (symbolsAmount > maxAmount) ? 'Внимание, вы превысили допустимое количество символов!' : line;
}

countSymbols ('Hello World!', 5);

//Функция для проверки, является ли строка палиндромом.
function checkPalindrom (line) {
  const newLine = line.toLowerCase();
  let emptyLine = '';
  // eslint-disable-next-line for-direction
  for (let i = newLine.length - 1; i <= 0; i--) {
    emptyLine += newLine[i];
    return emptyLine;
  }
  const result = (newLine === emptyLine) ? 'Вот так палиндром!' : 'Нет, тут все разное';

  // eslint-disable-next-line no-console
  console.log(result);
}

checkPalindrom ('топот');


// function countLetters(str) {
//   const counts = {};

//   // Подсчет количества каждой буквы
//   for (const char of str) {
//     counts[char] = counts[char] + 1;
//   }

//   // Получение отсортированного массива ключей
//   const sortedKeys = Object.keys(counts).sort();

//   // Формирование результата
//   const result = sortedKeys.map((key) => `${key}:${counts[key]}`).join(",");
//   return result;
// }

// // Пример использования функции
// const input = "abcbb";
// const output = countLetters(input);
// console.log(output); // "a:1,b:3,c:1"

// function countLetters(str) {
//   const letterCounts = {};

//   // Проходим по каждому символу в строке
//   for (const letter of str) {
//     if (letterCounts[letter]) {
//       letterCounts[letter]++;
//     } else {
//       letterCounts[letter] = 1;
//     }
//   }
//   const sortedKeys = Object.keys(letterCounts).sort();
//   // Формирование результата
//   const result = sortedKeys
//     .map((key) => `${key}:${letterCounts[key]}`)
//     .join(",");
//   return result;
// }

function countLetters(str) {
  const letterCounts = {};

  for (letter of str) {
    if (letterCounts[letter]) {
      letterCounts[letter]++;
    } else {
      letterCounts[letter] = 1;
    }
  }
  console.log(letterCounts);

  //   // Проходим по каждому символу в строке
  //   for (const letter of str) {
  //     if (letterCounts[letter]) {
  //       letterCounts[letter]++;
  //     } else {
  //       letterCounts[letter] = 1;
  //     }
  //   }
  //   const sortedKeys = Object.keys(letterCounts).sort();
  //   // Формирование результата
  //   const result = sortedKeys
  //     .map((key) => `${key}:${letterCounts[key]}`)
  //     .join(",");
  //   return result;
}

// Пример использования функции
const inputString = "abcbb";
const letterObject = countLetters(inputString);
console.log(letterObject); // { a: 1, b: 3, c: 1 }

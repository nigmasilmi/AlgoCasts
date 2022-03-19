// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;

// function vowels(str) {
//     let map = {};
//     str = str.toLowerCase();
//     let vowelsDict = [97, 101, 105, 111, 117];
//     for (let char of str) {
//       if (vowelsDict.indexOf(char.charCodeAt()) !== -1) {
//         if (!map[char]) {
//           map[char] = 1;
//         } else {
//           map[char]++;
//         }
//       }
//     }
//     return Object.values(map).reduce((cur, acc) => cur + acc, 0);
//   }

// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversed = '';
  for (let char of str) {
    debugger;
    reversed = char + reversed;
  }
  return reversed;
}
reverse('lola');
module.exports = reverse;
// alternative solutions to mine
// const reverse2 = (str) => {
//     const arr = str.split('');
//     arr.reverse();
//     return arr.join('');
//   };
//   const reverse3 = (str) => {
//     return str.split('').reverse().join('');
//   };

// function reverse(str) {
//     const strArr = str.split('');
//     let result = [];
//     for (let i = strArr.length - 1; i >= 0; i--) {
//       result.push(strArr[i]);
//     }
//     result = result.join('');
//     return result;
//   }
// function reverse(str) {
//     let reversed = '';
//     for (let char of str) {
//       reversed = char + reversed;
//     }
//     return reversed;
//   }

// function reverse(str) {
//     debugger;
//     return str.split('').reduce((reversed, character) => character + reversed, '');
//   }

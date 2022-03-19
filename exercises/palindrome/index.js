// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // not optimal because once we compare to the middle of the arr we already know if it is a palindrome or not
  return str.split('').every((char, i) => {
    return char === str[str.length - 1 - i];
  });
}

module.exports = palindrome;

// function palindrome(str) {
//     let reversed = '';
//     for (let char of str) {
//       reversed = char + reversed;
//     }
//     if (reversed === str) {
//       return true;
//     } else {
//       return false;
//     }
//   }

// function palindrome(str) {
//     const reversed = str.split('').reverse().join('');
//     return reversed === str;
//   }

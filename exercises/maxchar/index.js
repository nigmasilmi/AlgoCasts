// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const map = {};
  for (let char of str) {
    map[char] = map[char] + 1 || 1;
  }
  let most = '';
  let freq = 0;
  for (let ele in map) {
    if (map[ele] > freq) {
      freq = map[ele];
      most = ele;
    }
  }
  return most;
}

module.exports = maxChar;

// function maxChar(str) {
//     const map = {};
//     for (let char of str) {
//       if (!map[char]) {
//         map[char] = 1;
//       } else {
//         map[char]++;
//       }
//     }
//     let most = '';
//     let freq = 0;
//     for (let ele in map) {
//       if (map[ele] > freq) {
//         freq = map[ele];
//         most = ele;
//       }
//     }
//     return most;
//   }

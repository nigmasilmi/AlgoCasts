// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let stringAToCompare = stringA
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
  let stringBToCompare = stringB
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
  return stringAToCompare === stringBToCompare;
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//     // remove extraneus characters from the string
//     // string.replace(/[^\w]/g, "")
//     // to lower string.replace(/[^\w]/g, "").toLowerCase();
//     let stringAToCompare = stringA.replace(/[^\w]/g, '').toLowerCase();
//     let stringBToCompare = stringB.replace(/[^\w]/g, '').toLowerCase();
//     let mapA = {};
//     let mapB = {};
//     for (let char of stringAToCompare) {
//       mapA[char] = mapA[char] + 1 || 1;
//     }
//     for (let char of stringBToCompare) {
//       mapB[char] = mapB[char] + 1 || 1;
//     }
//     if (Object.keys(mapA).length !== Object.keys(mapB).length) {
//       return false;
//     }
//     for (let ele in mapA) {
//       if (mapA[ele] !== mapB[ele]) {
//         return false;
//       }
//     }
//     return true;
//   }

// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i - 1] === ' ' || !str[i - 1]) {
      result = result + str[i].toUpperCase();
    } else {
      result = result + str[i];
    }
  }
  return result;
}

module.exports = capitalize;

// function capitalize(str) {
//     // make an array of words
//     const wordArr = str.split(' ');
//     // iterate over each word array[word]
//     for (let i = 0; i < wordArr.length; i++) {
//       // take the firstCharacter
//       // capitalize the character
//       let firstCharCapWord = wordArr[i][0].toUpperCase();
//       // slice the string,
//       let sliced = wordArr[i].slice(1);

//       // join back the string
//       // replace the element in the array of words
//       wordArr[i] = `${firstCharCapWord}${sliced}`;
//     }
//     // join the elements with a blank space
//     // return the joint (:P)
//     return wordArr.join(' ');
//   }

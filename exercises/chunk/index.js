// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // while we havent reach the end of the array
  // chop the vessel array
  // chunk in size and push it to the output array
  let result = [];
  let index = 0;
  while (index < array.length) {
    result.push(array.slice(index, index + size));
    index += size;
  }
  return result;
}

module.exports = chunk;

// function chunk(array, size) {
//     let temp = [];
//     for (let i = 0; i < array.length; i++) {
//       let lastOne = temp[temp.length - 1];
//       if (!lastOne || lastOne.length === size) {
//         let arr = [];
//         arr.push(array[i]);
//         temp.push(arr);
//       } else {
//         lastOne.push(array[i]);
//       }
//     }
//     console.log(temp);
//     return temp;
//   }

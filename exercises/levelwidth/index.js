// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  // keep track of the width for each level
  const widths = [0];
  // BFT queue, 's' is the limiter marking the end of the level
  const helperArr = [root, 's'];
  while (helperArr.length > 1) {
    const node = helperArr.shift();
    if (node === 's') {
      widths.push(0);
      helperArr.push('s');
    } else {
      widths[widths.length - 1]++;
      helperArr.push(...node.children);
    }
  }
  return widths;
}

module.exports = levelWidth;

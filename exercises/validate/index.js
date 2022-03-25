// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  // if for some reason the values are less than the current min
  // or are greater than the max values
  // then, this is not a valid Binary Search Tree
  // keep in mind that this will work if the values for min and max are set
  if (min !== null && node.data < min) {
    return false;
  }
  if (max !== null && node.data > max) {
    return false;
  }
  // those up are the base cases
  // now the traversing and recursion
  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }
  if (node.right && !validate(node.right, node.data, max)) {
    return false;
  }
  return true;
}

module.exports = validate;

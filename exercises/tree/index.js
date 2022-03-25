// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
  add(data) {
    const newNode = new Node(data);
    this.children.push(newNode);
  }
  remove(data) {
    this.children.forEach((child, index) => {
      if (child.data === data) {
        this.children.splice(index, 1);
      }
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    // take the root
    // add to an array
    const arr = [this.root];

    // while the array has elements
    while (arr.length) {
      // take the first element out
      const node = arr.shift();
      // add all of the children to the end of the array
      arr.push(...node.children);
      // take the first one and apply the callback function with it
      fn(node);
    }
  }
  traverseDF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      arr.unshift(...node.children);
      fn(node);
    }
  }
}

module.exports = { Tree, Node };

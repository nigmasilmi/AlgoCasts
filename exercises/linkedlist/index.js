// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  size() {
    // while each node has a next !== null
    // we haven't reach the end
    // when we are in the end, oh, a good opportunity to count the number of nodes
    let counter = 0;
    let currentNode = this.head;
    while (currentNode) {
      currentNode = currentNode.next;
      counter++;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    let newHead = this.head.next;
    this.head.next = null;
    this.head = newHead;
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let prev = this.head;
    let current = this.head.next;
    // while there is a node
    while (current.next) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
  }

  insertLast(data) {
    const currLast = this.getLast();
    if (currLast) {
      // there are some nodes
      currLast.next = new Node(data);
    } else {
      // the list is empty
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let cur = this.head;
    while (cur) {
      if (counter === index) {
        return cur;
      }
      counter++;
      cur = cur.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return null;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    const prev = this.getAt(index - 1);
    if (!prev || !prev.next) {
      return null;
    }
    prev.next = prev.next.next;
  }
  insertAt(data, index) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    const prev = this.getAt(index - 1) || this.getLast();
    newNode.next = prev.next;
    prev.next = newNode;
  }

  forEach(fn) {
    if (!this.head) {
      return null;
    }
    let cur = this.head;
    while (cur) {
      fn(cur);
      cur = cur.next;
    }
  }
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };

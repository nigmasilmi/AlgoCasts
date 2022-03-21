// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
  const queue = new Queue();
  // iterate over the arrays if both have a next element to contribute
  while (sourceOne.peek() && sourceTwo.peek()) {
    // remove one item from the sourceOne
    let itemA = sourceOne.remove();
    // add that item to the result queue
    queue.data.unshift(itemA);
    // remove one item from the sourceTwo
    let itemB = sourceTwo.remove();
    // add that item to the result queue
    queue.data.unshift(itemB);
  }

  // check which of the arrays has elements left
  // add them as they are to the start of the queue
  if (sourceOne.length > 0) {
    while (sourceOne.length > 0) {
      queue.add(sourceOne.remove());
    }
  } else {
    while (sourceTwo.length > 0) {
      queue.add(sourceTwo.remove());
    }
  }

  return queue;
}

module.exports = weave;

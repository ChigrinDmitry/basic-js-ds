const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
  constructor() {
    this.length = 0;
    this.data = null;
  }

  getUnderlyingList() {
    if (this.data) {
      return this.data;
    } else {
      return null;
    }
  }

  enqueue(value) {
    this.length++;

    if (!this.data) {
      this.data = new ListNode(value);
    } else {
      let position = this.data;
      while (position.next) {
        position = position.next;
      }
      position.next = new ListNode(value);
    }
  }

  dequeue() {
    let currentData = null;

    if (this.data) {
      currentData = this.data;
      this.data = currentData.next;
      this.length--;
      return currentData.value;
    } else return currentData;
  }
}

module.exports = {
  Queue,
};

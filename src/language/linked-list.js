'use strict';
class _Node {
  constructor({ value, next }) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor({ id, name, total_score }) {
    this.id = id;
    this.name = name;
    this.total_score = total_score;
    this.head = null;
  }

  insertHead(value) {
    let newHead = new _Node({
      value,
      next: this.head,
    });

    this.head = newHead;
  }

  findTail() {
    let tail = this.head;

    while (tail.next) {
      tail = tail.next;
    }

    return tail;
  }

  insertTail(value) {
    let newTail = new _Node({
      value,
      next: null,
    });

    const tail = this.findTail();

    if (!tail) {
      this.head = newTail;
    } else {
      tail.next = newTail;
    }
  }


  insert(value) {
    if (!this.head) {
      this.insertHead(value);
    } else {
      this.insertTail(value);
    }
  }

  getNodeAt(index) {
    let count = 0;
    let node = this.head;

    while ((count < index) && node) {
      node = node.next;
      count++;
    }
    return node;
  }

  insertAt(index, value) {
    let nodeBeforeIndex = this.getNodeAt(index - 1);

    if (!nodeBeforeIndex) {
      return this.insertTail(value);
    }

    let newNode = new _Node({
      value,
      next: nodeBeforeIndex.next,
    });

    nodeBeforeIndex.next = newNode;
  }

  clear() {
    this.head = null;
  }

  removeHead() {
    this.head = this.head.next;
  }

  shiftHead(spaces) {
    let head = this.head;
    this.removeHead();
    this.insertAt(spaces, head.value);
  }

  map(callback) {
    let node = this.head;
    let arr = [];
    while (node) {
      arr.push(callback(node));
      node = node.next;
    }
    return arr;
  }
}

module.exports = { _Node, LinkedList };
'use strict';

const Node = require('./node');

module.exports = class Stack {
  constructor() {
    this.end = null;
  }
  push(value) {
    const node = new Node(value);
    if (this.end === null) {
      this.end = node;
      return this;
    }
    node.next = this.end;
    this.end = node;
    return this;
  }

  pop() {
    if (!this.end) {
      return null;
    }

    const lowerNode = this.end.next;// this is ref to lower node
    this.end = lowerNode; 
    return this;
  }
  peek() {
    if (!this.end) {
      return null;
    } 
    return this.end.value;
  }
  empty() {
    if (!this.end) {
      return true;
    } 
    return false;
  }
};

'use strict';

const Stack = require('../lib/stack-ll.js');
// const LinkedList = require('../../../../data-structures-and-algorithms/ll-merge/addAtEnd.js');

describe('addAtEnd.js', () => {
  const stack = new Stack();
  test('push test', () => {
    stack.push(3);
    stack.push(4);
    stack.push(5);
    stack.push(6);

    
    expect(stack.end.value).toEqual(6);
  });
  test('pop test', () => {
    stack.pop();
    
    expect(stack.end.value).toEqual(5);
  });
  test('peek test', () => {
    expect(stack.peek()).toEqual(5);
  });
  test('empty test', () => {
    expect(stack.empty()).toBeFalsy();
  });
});

'use strict';

const linkedList = function(val) {
  let node = new Node(val),
    currentNode = this.head

  if (currentNode) {
    this.head = node;
    this._length++;
    return node;
  };
};

const makeNode = (data, next) => {
  return {
    data,
  };
};

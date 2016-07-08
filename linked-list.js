/*jslint node: true */
'use strict';


const linkedList = function(val) {
  let node = new Node(val),
    currentNode = this.head

  if (currentNode) {
    this.head = node;
    this._length++;
    return node;
  };

  while (currentNode.next) {
    currentNode = currentNode.next;
  }

  currentNode.next = node;
};

// second version

const makeNode = (data, next) => ({ data, next});

let list = makeNode('first');

list = makeNode('second', list);

list = makeNode('third', list);

const printList = (list) => {
  for (let node = list; node; node = node.next) {
    console.log(node.data);
  }
};

printList(list);

// third version

list.prototype.prepend = function
list.append('first');
list.append('second');
list.append('third');
list.prepend('before first');

const printList = (list) =>

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;

    if(!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  append(value) {
    const newNode = new Node(value);

    if(!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  delete(value) {
    if(!this.head) {
      return null;
    }
    let deletedNode = null;
    while(this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }
    let currentNode = this.head;
    if(currentNode !== null) {
      while (currentNode.next) {
        if(currentNode.next.value === value) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
    if(this.tail && this.tail.value === value) {
      this.tail = currentNode
    }
    return deletedNode;
  }

  find(value) {
    if(!this.head) {
      return null;
    }

    let currentNode = this.head;

    while(currentNode) {
      if(value !== undefined && currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }
    return null;
  }

  deleteTail() {
    if(!this.tail) {
      return null;
    }
    const deletedTail = this.tail;

    if(this.head === this.tail) {
      this.tail = null;
      this.head = null;

      return deletedTail;
    }
    let currentNode = this.head;
    while(currentNode.next) {
      if(!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;
    return deletedTail;
  }

  deleteHead() {
    if(!this.head) {
      return null;
    }
    const deletedHead = this.head;
    if(this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    return deletedHead;
  }

  fromArray(values) {
    values.forEach((val) => this.append(val));
    return this;
  }

  toArray() {
    const nodes = [];
    let currentNode = this.head;
    while(currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  toString(callback) {
    return this.toArray().map((node) => node.toString(callback)).toString();
  }

  reverse() {
    let currentNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while(currentNode) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode;

    return this;
  }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.prepend(4);
console.log(list.toArray());
console.log(list.toString());
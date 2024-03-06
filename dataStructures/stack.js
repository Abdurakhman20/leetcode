class Stack {
  #count;
  #storage;
  constructor() {
    this.#count = 0;
    this.#storage = {};
  }

  push(value) {
    this.#storage[this.#count] = value;
    this.#count++;
  }

  pop() {
    if(this.#count === 0) return undefined;
    this.#count--;
    let res = this.#storage[this.#count];
    delete this.#storage[this.#count];

    return res;
  }

  peek() {
    return this.#storage[this.#count - 1];
  }

  size() {
    return this.#count;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);


console.log(stack.size());
console.log(stack.pop());
console.log(stack.size());
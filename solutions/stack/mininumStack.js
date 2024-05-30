/*Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

 */

var MinStack = function () {
  this.stack = {};
  this.length = 0;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack[this.length++] = val;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let popped = this.stack[this.length - 1];

  delete this.stack[--this.length];
  return popped;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return Math.min(...Object.values(this.stack));
};

const obj = new MinStack();
obj.push(-2);
obj.push(0);
obj.push(-3);
console.log(obj.getMin()); //return -3
console.log(obj);
obj.pop();
console.log(obj.top());
console.log(obj.getMin());

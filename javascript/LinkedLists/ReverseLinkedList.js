function Node(value) {
  this.value = value;
  this.next = null;
}

/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 * If the input is null, your function should return null
 *
 * Example:
 * If the linked list is:
 *
 *      1 -> 2 -> 3 -> 4 -> 5
 *
 * The result should like like:
 *
 *      5 -> 4 -> 3 -> 2 -> 1
 *
 * Extension:
 * Do it in place
 *
 */

/**
 * Steps:
 * 1. Capture current node's next node
 * 2. Make current node's next point to previous node
 * 3. Store current Node as previous
 * 4. Move to next node with the help of node captured in step 1
 * 5. Repeat
 */

const reverseLinkedList = (head) => {
  //two pointers and a dummy
};

/* 
--FIRST ITERATION--
next Node {
  value: 2,
  next: Node { value: 3, next: Node { value: 4, next: [Object] } } }

current.next null

previous Node { value: 1, next: null }

current Node {
  value: 2,
  next: Node { value: 3, next: Node { value: 4, next: [Object] } } }
------------------------------------------------------------------------
next Node {
  value: 3,
  next: Node { value: 4, next: Node { value: 5, next: null } } }

current.next Node { value: 1, next: null }

previous Node { value: 2, next: Node { value: 1, next: null } }

current Node {
  value: 3,
  next: Node { value: 4, next: Node { value: 5, next: null } } }
------------------------------------------------------------------------
next Node { value: 4, next: Node { value: 5, next: null } }

current.next Node { value: 2, next: Node { value: 1, next: null } }

previous Node {
  value: 3,
  next: Node { value: 2, next: Node { value: 1, next: null } } }

current Node { value: 4, next: Node { value: 5, next: null } }
------------------------------------------------------------------------
next Node { value: 5, next: null }

current.next Node {
  value: 3,
  next: Node { value: 2, next: Node { value: 1, next: null } } }

previous Node {
  value: 4,
  next: Node { value: 3, next: Node { value: 2, next: [Object] } } }

current Node { value: 5, next: null }
------------------------------------------------------------------------
next null
current.next Node {
  value: 4,
  next: Node { value: 3, next: Node { value: 2, next: [Object] } } }
previous Node {
  value: 5,
  next: Node { value: 4, next: Node { value: 3, next: [Object] } } }
current null

*/

let one = new Node(1);

let two = new Node(2);
one.next = two;
let three = new Node(3);
two.next = three;
let four = new Node(4);
three.next = four;
let five = new Node(5);
four.next = five;
console.log(reverseLinkedList(one));

module.exports = { Node, reverseLinkedList };

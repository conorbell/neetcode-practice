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
  if (!head) return head;
};

module.exports = { Node, reverseLinkedList };

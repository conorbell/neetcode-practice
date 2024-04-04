function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/* 
You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

*/
var reorderList = function (head) {
  //slow fast pointers
};

const list1 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4)))
);
// let list2 = new ListNode(10, new ListNode(3, new ListNode(4)));

console.log(reorderList(list1));
// console.log(reorderList(list2));

module.exports = { reorderList };

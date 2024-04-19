function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const hasCycle = (head) => {};

const h = new ListNode(3, new ListNode(2, new ListNode(0, new ListNode(-4))));

console.log(hasCycle(h));

/* 


*/

const h2 = new ListNode(1, new ListNode(2));

console.log(hasCycle(h2));

const h3 = new ListNode(1);

console.log(hasCycle(h3));

module.exports = { hasCycle, ListNode };

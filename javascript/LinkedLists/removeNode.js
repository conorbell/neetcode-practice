function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0);

  dummy.next = head;

  let slow = dummy,
    fast = dummy;

  for (let i = 1; i <= n + 1; i++) {
    fast = fast.next;
  }
};

const h = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

console.log(removeNthFromEnd(h, 4));

// const h2 = new ListNode(
//   1,
//   new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
// );

// console.log(removeNthFromEnd(h2, 4));

// const h3 = new ListNode(1);

// console.log(removeNthFromEnd(h3, 1));
/* 


1 -> 2 -> 3 -> 4 -> 5     1 -> 2 -> 3 -> 5

*/
module.exports = { removeNthFromEnd, ListNode };

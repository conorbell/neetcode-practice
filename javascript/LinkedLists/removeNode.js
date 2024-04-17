function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// const reverseList = (head) => {
//   let curr = head,
//     next = head,
//     prev = null;

//   while (curr) {
//     next = next.next;

//     curr.next = prev;
//     prev = curr;
//     curr = next;
//   }
//   return prev;
// };

var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0),
    fast = dummy,
    slow = dummy;

  dummy.next = head;

  //shift fast pointer forward
  for (let i = 1; i <= n; i++) {
    fast = fast.next;
  }

  //shift slow pointer forward
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return dummy.next;
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

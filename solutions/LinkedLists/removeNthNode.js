/*
Steps: 
1. create dummy and set next pointer on dummy to be head 
2. intialize slow and fast pointers 
3. shift up fast pointer so long as its less than or equal to n+1 
4. as long as fast is not null 
  a. shift fast up 
  b. shift slow up 
5. shift slows next pointer to the pointer after 
6. return dummy.next

*/

var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0);

  dummy.next = head;

  let fast = dummy,
    slow = dummy;

  for (let i = 1; i <= n + 1; i++) {
    fast = fast.next;
  }

  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return dummy.next;
};

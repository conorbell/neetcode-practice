var reorderList = function (head) {
  //pointers
  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  //reverse second list
  second = slow.next; // head of second list
  slow.next = null; // tail of first list pointing to null
  let prev = null;

  while (second) {
    let temp = second.next;
    second.next = prev;
    prev = second;
    second = temp;
  }

  //merge
  [first, second] = [head, prev];

  while (second) {
    let temp1 = first.next;

    let temp2 = second.next;

    first.next = second;
    second.next = temp1;
    first = temp1;
    second = temp2;
  }
  return first;
};

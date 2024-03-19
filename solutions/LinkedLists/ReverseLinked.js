var reverseList = function (head) {
  if (!head) return head;
  let previous = null;
  let current = head;
  let next = head;

  while (current) {
    next = next.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
};

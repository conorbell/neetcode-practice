const hasCycle = (head) => {
  let fast = head,
    slow = head;

  while (fast && fast.next) {
    if (fast === slow) return true;

    fast = fast.next.next;
    slow = slow.next;
  }

  return false;
};

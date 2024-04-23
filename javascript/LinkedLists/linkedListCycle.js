function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const hasCycle = (head) => {
  let fast = head.next,
    slow = head;

  while (fast && fast.next) {
    if (slow === fast) return true;
    fast = fast.next.next;

    slow = slow.next;
  }
  return false;
};

module.exports = { hasCycle, ListNode };

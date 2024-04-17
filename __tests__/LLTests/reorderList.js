const {
  reorderList,
  ListNode,
} = require('../../javascript/LinkedLists/reorderList');

// A helper function to create a ListNode
// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val;
//   this.next = next === undefined ? null : next;
// }

test('reorders a linked list', () => {
  // Create the linked list
  const head = new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(4)))
  );

  // Reorder the list
  reorderList(head);

  // Expected output: 1 -> 4 -> 2 -> 3
  expect(head.val).toBe(1);
  expect(head.next.val).toBe(4);
  expect(head.next.next.val).toBe(2);
  expect(head.next.next.next.val).toBe(3);
});

test('reorders a linked list with odd number of nodes', () => {
  // Create the linked list
  const head = new ListNode(1, new ListNode(2, new ListNode(3)));

  // Reorder the list
  reorderList(head);

  // Expected output: 1 -> 3 -> 2
  expect(head.val).toBe(1);
  expect(head.next.val).toBe(3);
  expect(head.next.next.val).toBe(2);
});

test('reorders an empty linked list', () => {
  // Create an empty linked list
  const head = null;

  // Reorder the list (should do nothing)
  reorderList(head);

  // Expected output: null
  expect(head).toBeNull();
});

test('reorders a linked list with five nodes', () => {
  // Create the linked list
  const head = new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
  );

  // Reorder the list
  reorderList(head);

  // Expected output: 1 -> 5 -> 2 -> 4 -> 3
  expect(head.val).toBe(1);
  expect(head.next.val).toBe(5);
  expect(head.next.next.val).toBe(2);
  expect(head.next.next.next.val).toBe(4);
  expect(head.next.next.next.next.val).toBe(3);
});

const {
  removeNthFromEnd,
  ListNode,
} = require('../../javascript/LinkedLists/removeNode'); // Replace 'yourFileName.js' with the actual file name containing your function

describe('removeNthFromEnd test', () => {
  test('removes the second node from the end', () => {
    // Create the linked list
    const head = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    );

    // Reorder the list
    removeNthFromEnd(head, 2);

    // Expected output: 1 -> 2 -> 3 -> 5
    expect(head.val).toBe(1);
    expect(head.next.val).toBe(2);
    expect(head.next.next.val).toBe(3);
    expect(head.next.next.next.val).toBe(5);
  });

  test('removes first node from the end', () => {
    // Create the linked list
    const head = new ListNode(1, new ListNode(2));

    // Reorder the list
    removeNthFromEnd(head, 1);

    // Expected output: 1
    expect(head.val).toBe(1);
    expect(head.next).toBe(null);
  });

  test('removes first node from end of list containing 1 node', () => {
    // Create an empty linked list
    const head = new ListNode(1);

    // Reorder the list (should do nothing)
    const newHead = removeNthFromEnd(head, 1);

    // Expected output: null
    expect(newHead).toBe(null);
  });
});

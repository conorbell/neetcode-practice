const {
  hasCycle,
  ListNode,
} = require('../../javascript/LinkedLists/linkedListCycle');

describe('Linked List Cycle', () => {
  test('detects cycle in linked list with cycle at pos = 1', () => {
    // Create a linked list with a cycle at pos = 1
    const head1 = {
      val: 3,
      next: {
        val: 2,
        next: {
          val: 0,
          next: {
            val: -4,
            next: null,
          },
        },
      },
    };
    head1.next.next.next.next = head1.next; // Creating cycle at pos = 1

    // Expected output: true
    expect(hasCycle(head1)).toBe(true);
  });

  test('detects cycle in linked list with cycle at pos = 0', () => {
    // Create a linked list with a cycle at pos = 0
    const head2 = {
      val: 1,
      next: {
        val: 2,
        next: null,
      },
    };
    head2.next.next = head2; // Creating cycle at pos = 0

    // Expected output: true
    expect(hasCycle(head2)).toBe(true);
  });

  test('detects no cycle in linked list without cycle', () => {
    // Create a linked list without a cycle
    const head3 = {
      val: 1,
      next: null,
    };

    // Expected output: false
    expect(hasCycle(head3)).toBe(false);
  });
});

const {
  mergeTwoLists,
} = require('../../javascript/LinkedLists/mergeTwoSortedLL'); // Replace 'yourFileName.js' with the actual file name containing your function

// Define the ListNode constructor function
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

describe('mergeTwoLists', () => {
  test('Merge two non-empty lists', () => {
    const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
    const list2 = new ListNode(0, new ListNode(3, new ListNode(4)));

    let mergedList = mergeTwoLists(list1, list2);

    // Define the expected merged list
    let expectedMergedList = new ListNode(
      0,
      new ListNode(
        1,
        new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4))))
      )
    );

    // Check if the merged list matches the expected merged list
    while (mergedList && expectedMergedList) {
      expect(mergedList.val).toBe(expectedMergedList.val);
      mergedList = mergedList.next;
      expectedMergedList = expectedMergedList.next;
    }
    // Make sure both lists are null at the end
    expect(mergedList).toBeNull();
    expect(expectedMergedList).toBeNull();
  });

  test('Merge one empty list with a non-empty list', () => {
    const list1 = null; // empty list
    const list2 = new ListNode(0, new ListNode(3, new ListNode(4)));

    const mergedList = mergeTwoLists(list1, list2);

    // Expected merged list: 0 -> 3 -> 4
    expect(mergedList.val).toBe(0);
    expect(mergedList.next.val).toBe(3);
    expect(mergedList.next.next.val).toBe(4);
    expect(mergedList.next.next.next).toBeNull(); // Make sure there are no more nodes
  });

  test('Merge two empty lists', () => {
    const list1 = null; // empty list
    const list2 = null; // empty list

    const mergedList = mergeTwoLists(list1, list2);

    expect(mergedList).toBeNull(); // Merged list should be null since both input lists are empty
  });
});

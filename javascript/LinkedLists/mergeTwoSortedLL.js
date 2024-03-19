/* 
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. 
The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.
*/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (list1, list2) {
  //input: 2 linked lists
  //output: 1 linked list

  //step 1: create dummy node
  const dummy = new ListNode(-Infinity);
  //step 2: initialize pointers
  let prev = dummy;
  let current1 = list1;
  let current2 = list2;

  console.log(list1);
};

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3), new ListNode(4));

console.log(mergeTwoLists(list1, list2));

module.exports = { mergeTwoLists };

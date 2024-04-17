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

var mergeTwoLists = function (list1, list2) {};

// const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
// const list2 = new ListNode(0, new ListNode(3), new ListNode(5));

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(0, new ListNode(3, new ListNode(4)));

console.log(mergeTwoLists(list1, list2));

/* 
  
  current1 = ListNode {
    val: 1,
    next: ListNode { val: 2, next: ListNode { val: 4, next: null } }
  }
  
  current2 = ListNode { val: 0, next: ListNode { val: 3, next: null } }
  
  dummy = ListNode { val: -Infinity, next: null }
  
  prev = ListNode { val: -Infinity, next: null }
  
  --First iteration--
  
  current1.val = 1 
  current2.val = 0
  
   while (current1 && current2) {
  
      if (current1.val(1) <= current2.val(0)) {
        prev.next = current1;
        prev = current1;
        current1 = current1.next;
      } else {
        prev.next = current2; ---> prev.next = ListNode { val: 0, next: ListNode { val: 3, next: null } }
  
        prev = current2;  --> prev = ListNode { val: 0, next: ListNode { val: 3, next: null } }
  
        current2 = current2.next; ---> current2 = ListNode { val: 3, next: null }
      }
    }
  
  --Second Iteration--
  
  current1 = ListNode {
    val: 1,
    next: ListNode { val: 2, next: ListNode { val: 4, next: null } }
  }
  
  current2 = ListNode { val: 3, next: null }
  prev =  ListNode { val: 0, next: ListNode { val: 3, next: null } }
  current1.val = 1 
  current2.val = 3
  
  
  
   while (current1 && current2) {
      //check if current1.val is greater than current2.val
  
      if (current1.val(1) <= current2.val(3)) {
  
        prev.next = current1; --> prev.next = 
      
        prev = current1;
        current1 = current1.next;
      } else {
        prev.next = current2;
        prev = current2;
        current2 = current2.next;
      }
    }
  
  --Third Iteration--
  
   while (current1 && current2) {
      //check if current1.val is greater than current2.val
  
      if (current1.val <= current2.val) {
        prev.next = current1;
        prev = current1;
        current1 = current1.next;
      } else {
        prev.next = current2;
        prev = current2;
        current2 = current2.next;
      }
    }
  
  --Fourth Iteration--
  
   while (current1 && current2) {
      //check if current1.val is greater than current2.val
  
      if (current1.val <= current2.val) {
        prev.next = current1;
        prev = current1;
        current1 = current1.next;
      } else {
        prev.next = current2;
        prev = current2;
        current2 = current2.next;
      }
    }
  
  */

module.exports = { mergeTwoLists };

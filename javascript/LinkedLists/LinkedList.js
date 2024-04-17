class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class LinkedList {
  constructor(val) {
    this.head = new ListNode(val);
    this.tail = this.head;
  }

  get(index) {
    console.log(this.head.next);
    let head = this.head;
    let count = 0;

    while (head) {
      if (count === index) {
        return head.val;
      }
      head = head.next;
      count++;
    }
    return 'oops';
  }

  insertHead(val) {
    const newNode = new ListNode(val);
    newNode.next = this.head;
    this.head = newNode;
    if (!newNode.next) this.tail = newNode;
    // return this.head;
  }

  insertTail(val) {
    this.tail.next = new ListNode(val);
    this.tail = this.tail.next;
  }

  remove(index) {
    let i = 0,
      curr = this.head;

    while (i < index && curr) {
      i++;
      curr = curr.next;

      if (curr && curr.next) {
        if (curr.next === this.tail) {
          this.tail = curr;
        }
        curr.next = curr.next.next;
        return true;
      }
      return false;
    }
  }
  getValues(head) {}
}

const list = new LinkedList(1);
console.log(list.get(0));
console.log(list.get(1));
list.insertHead(2);
list.insertHead(3);
list.insertTail(6);

console.log(list);
console.log(list.remove(2));
console.log(list);
// console.log(list.insertHead(3));

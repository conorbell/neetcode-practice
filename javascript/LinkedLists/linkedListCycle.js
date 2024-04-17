function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

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

const h = new ListNode(3, new ListNode(2, new ListNode(0, new ListNode(-4))));

console.log(hasCycle(h));

/* 


*/

const h2 = new ListNode(1, new ListNode(2));

console.log(hasCycle(h2));

const h3 = new ListNode(1);

console.log(hasCycle(h3));

module.exports = { hasCycle, ListNode };

class Poop {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    return 'hi ' + this.name;
  }
}

class Shit extends Poop {
  constructor(name) {
    super(name);
  }
}

const donkey = new Shit('Donkey');

console.log(donkey.sayHi()); // Output: hi Donkey

/* Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

*/

const helper = () => {};

var isHappy = function (n, count = n) {
  let number = 0;
  console.log(n);
  console.log(count);

  console.log(number);

  //   console.log(number)
  const numberSplit = (num) => [...(n + '')].map((n) => +n);

  const numArray = numberSplit(n);
  console.log(numArray);
  for (let i = 0; i < numArray.length; i++) {
    number += numArray[i] ** 2;
  }
  console.log(number);
  //   if (number === 1) {
  //     return true;
  //   } else {
  //     count--;
  //   }
  //   if (count < 1) return false;
  return isHappy(n, count);
};

console.log(isHappy(19)); //true
// console.log(isHappy(2)); //false

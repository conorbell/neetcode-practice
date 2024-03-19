/* 
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
 and removing all non-alphanumeric characters, it reads the same forward and backward.
Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.
*/
const isPalindrome = function (s) {
  //i: string
  //o: boolean

  //remove non-alphanumeric characters from string
  s = s.replace(/[\W _]/gi, '').toLowerCase();
  //create two pointers
  let left = 0;
  let right = s.length - 1;

  //while left is less than right
  while (left < right) {
    //if string at right does not match string at left return false
    if (s[right] !== s[left]) return false;
    //else increment and decrement both
    left++;
    right--;
  }
  //return true if we make it through the whole word
  return true;
};
//test cases
console.log(isPalindrome('ab_a'));
console.log(isPalindrome('A man, a plan, a canal: Panama')); //true
console.log(isPalindrome('race a car')); //false
console.log(isPalindrome(' ')); //true

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
};
//test cases
console.log(isPalindrome('ab_a')); //true
console.log(isPalindrome('A man, a plan, a canal: Panama')); //true
console.log(isPalindrome('race a car')); //false
console.log(isPalindrome(' ')); //true

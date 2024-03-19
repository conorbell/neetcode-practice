/* 
Given a string s, find the length of the longest 
substring
 without repeating characters.


*/

var lengthOfLongestSubstring = function (s) {
  let longestStringLength = 0,
    startOfWindow = 0,
    currentPosition = 0;

  let characterSet = new Set();

  while (currentPosition < s.length) {
    //if set already has current element in the array that means there's a repeat
    if (characterSet.has(s[currentPosition])) {
      //access the next element in array by increment start of window this is how you shift window up
      characterSet.delete(s[startOfWindow++]);
    } else {
      characterSet.add(s[currentPosition++]);
      longestStringLength = Math.max(longestStringLength, characterSet.size);
    }
  }
  return longestStringLength;
};

// console.log(lengthOfLongestSubstring('abcabcbb')); //3
// console.log(lengthOfLongestSubstring('bbbbb')); //1
console.log(lengthOfLongestSubstring('pwwkew')); //3
// "abbcde"
/* 
The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

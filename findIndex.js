/* 
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

*/
var strStr = function (haystack, needle) {
  let count = 0,
    str = '';
  let h = 0,
    arr = [],
    n = 0;

  while (h < haystack.length) {
    console.log(haystack[h]);
    let first;
    if (haystack[h] !== needle[n]) {
      str = '';
      h++;
    }

    console.log(haystack[h] === needle[n]);

    if (haystack[h] === needle[n]) {
      arr.push(h);
      str += haystack[h];
      count++;
      h++;
      n++;
    }

    if (count === needle.length) {
      console.log(str);
      if (str === needle) {
        return arr[0];
      } else {
        return -1;
      }
    }
  }
  return -1;
};

// console.log(strStr('sadbutsad', 'sad'));
// console.log(strStr('leetcode', 'leeto'));
// console.log(strStr('hello', 'll'));
// console.log(strStr('aaaaa', 'bba'));
console.log(strStr('mississippi', 'issip'));

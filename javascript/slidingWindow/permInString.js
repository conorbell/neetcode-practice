/*
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.


*/

const checkInclusion = (s1, s2) => {
  //i: two strings
  //o: boolean

  if (s1.length > s2.length) {
    return false;
  }

  //initialize two arrays to track character frequencies for s1 and the sliding window in s2
  let s1Map = new Array(26).fill(0);
  let s2Map = new Array(26).fill(0);

  //fill character frequencies for the first window of s2 and s1
  for (let i = 0; i < s1.length; i++) {
    //increment frequencies for characters in s1 and first window of s2

    s1Map[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    s2Map[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }
  // Initialize count to keep track of matched character frequencies
  let count = 0;

  // Count the number of characters with matching frequencies in s1 and the sliding window of s2
  for (let i = 0; i < 26; i++) {
    if (s1Map[i] == s2Map[i]) {
      count++;
    }
  }

  for (let i = 0; i < s2.length - s1.length; i++) {
    if (count == 26) {
      return true;
    }

    let r = s2.charCodeAt(i + s1.length) - 'a'.charCodeAt(0);
    let l = s2.charCodeAt(i) - 'a'.charCodeAt(0);

    s2Map[r]++;
    if (s2Map[r] == s1Map[r]) {
      count++;
    } else if (s2Map[r] == s1Map[r] + 1) {
      count--;
    }

    s2Map[l]--;
    if (s2Map[l] == s1Map[l]) {
      count++;
    } else if (s2Map[l] == s1Map[l] - 1) {
      count--;
    }
  }

  return count == 26;
};

console.log(checkInclusion('ab', 'eidbaooo')); //true
console.log(checkInclusion('ab', 'eidboaoo')); //false

module.exports = { checkInclusion };

/* 
we gootta do a sliding window 



*/

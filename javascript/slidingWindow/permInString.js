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
};

console.log(checkInclusion('ab', 'eidbaooo')); //true
console.log(checkInclusion('ab', 'eidboaoo')); //false

module.exports = { checkInclusion };

/* 
we gootta do a sliding window 



*/

const perm = (s, i = 0, permutation = ' ') => {
  const freqMap = new Map();

  for (let char of s) {
    if (!freqMap.has(char)) {
      freqMap.set(char, 1);
    } else {
      freqMap.set(char, freqMap.get(char) + 1);
    }
  }

  console.log(freqMap);
};
// console.log(perm('ab'));
console.log(perm('conor'));

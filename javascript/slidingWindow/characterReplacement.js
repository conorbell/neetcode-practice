/* 
You are given a string s and an integer k. You can choose any character of the 
string and change it to any other uppercase English character. 
You can perform this operation at most k times.
Return the length of the longest substring containing 
the same letter you can get after performing the above operations.
*/

/**
 * Steps:
 *
 */

const characterReplacement = (s, k) => {
  //edge cases
  if (/[a-z]/.test(s) || k < 0 || typeof s === 'number')
    throw new Error('please submit a valid input');

  //create an obj to store shit
  const map = {};

  let max = 0,
    left = 0,
    maxCount = 0;

  for (let right = 0; right < s.length; right++) {
    const c = s[right];

    map[c] = (map[c] || 0) + 1;

    maxCount = Math.max(maxCount, map[c]);

    while (right - left + 1 - maxCount > k) {
      map[s[left]] -= 1;
      left += 1;
    }
    max = Math.max(max, right - left + 1);
  }

  return max;
};

console.log(characterReplacement('ABAB', 2));
console.log(characterReplacement('AABABBA', 1));

module.exports = { characterReplacement };

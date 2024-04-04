/* 
You are given a string s and an integer k. You can choose any character of the 
string and change it to any other uppercase English character. 
You can perform this operation at most k times.
Return the length of the longest substring containing 
the same letter you can get after performing the above operations.
*/

/**
 * Steps:
 * 1. create empty obj to store character counts
 * 2. initialize variables for max length of substring, left boundary of current window, and for max count of any character in current window
 * 3. iterate through string, set label initializer as right
 * 4. For each character 'c' encountered
 *    a. increment its count in map
 *    b. update maxCount
 *    c. if difference between current window and max count exceeds k
 *      d. move left pointer and decrement the count of character at index position of left, increment left by 1
 * 5. Update max with max length of substring found so far
 * 6. return max
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

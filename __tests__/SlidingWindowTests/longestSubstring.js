const {
  lengthOfLongestSubstring,
} = require('../../javascript/slidingWindow/longestSubstring'); // Replace 'yourFileName.js' with the actual file name containing your function

describe('lengthOfLongestSubstring', () => {
  test('Example 1: "abcabcbb"', () => {
    const input = 'abcabcbb';
    const expected = 3;
    const result = lengthOfLongestSubstring(input);
    expect(result).toBe(expected);
  });

  test('Example 2: "bbbbb"', () => {
    const input = 'bbbbb';
    const expected = 1;
    const result = lengthOfLongestSubstring(input);
    expect(result).toBe(expected);
  });

  test('Example 3: "pwwkew"', () => {
    const input = 'pwwkew';
    const expected = 3;
    const result = lengthOfLongestSubstring(input);
    expect(result).toBe(expected);
  });

  // Add more test cases as needed
});

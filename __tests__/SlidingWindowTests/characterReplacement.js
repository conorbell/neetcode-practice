const {
  characterReplacement,
} = require('../../javascript/slidingWindow/characterReplacement');

describe('characterReplacement test', () => {
  let s;
  let k;

  it('Function should throw an error when given invalid inputs', () => {
    let s, k;

    s = 'abc';
    k = '1';
    expect(() => characterReplacement(s, k)).toThrow();

    s = 'ABC';
    k = -1;
    expect(() => characterReplacement(s, k)).toThrow();

    s = 1;
    k = 1;
    expect(() => characterReplacement(s, k)).toThrow();
  });

  it('Function should return length of the longest substring ', () => {
    s = 'ABAB';
    k = 2;
    expect(characterReplacement(s, k)).toEqual(4);
    s = 'AABABBA';
    k = 1;
    expect(characterReplacement(s, k)).toEqual(4);
    s = '';
    k = 0;
    expect(characterReplacement(s, k)).toEqual(0);
    s = 'A';
    k = 1;
    expect(characterReplacement(s, k)).toEqual(1);
  });

  it('Maximum value of k', () => {
    s = 'AAABBB';
    k = 3; // Maximum value of k for this string
    expect(characterReplacement(s, k)).toEqual(6); // All characters are the same, so the length of the longest substring is the length of s
  });
});

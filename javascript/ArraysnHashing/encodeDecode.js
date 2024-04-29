class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let result = '';
    for (let s of strs) {
      result += `${s.length}#${s}`;
    }
    return result;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    console.log(str);
    let result = [];
    let i = 0;

    while (i < str.length) {
      let j = i;

      while (str[j] !== '#') {
        j++;
      }

      let length = parseInt(str.substring(i, j), 10);
      i = j + 1;
      j = i + length;
      result.push(str.substring(i, j));
      i = j;
    }
    return result;
  }
}
const first = new Solution();

const encodedString = first.encode(['neet', 'code', 'love', 'you']);

console.log(encodedString);
const decodedArray = first.decode(encodedString);
console.log(decodedArray);

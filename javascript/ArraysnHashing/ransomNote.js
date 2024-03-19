/* Given two strings ransomNote and magazine, 
return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
Each letter in magazine can only be used once in ransomNote.
*/

var canConstruct = function (ransomNote, magazine) {
  //edge case
  if (/[A-Z]/.test(ransomNote) || /[A-Z]/.test(magazine))
    throw new Error('input can only consist of lowercase letters');

  //create hash table
  const noteMap = new Map();
  //   const magMap = new Map();

  let count = 0;

  for (let char of ransomNote) {
    !noteMap.has(char)
      ? noteMap.set(char, 1)
      : noteMap.set(char, noteMap.get(char) + 1);
  }

  for (let char of magazine) {
    if (noteMap.has(char)) {
      count++;
    }
  }
  console.log(count);
  return count >= ransomNote.length ? true : false;
};

console.log(canConstruct('a', 'b')); // false
console.log(canConstruct('aa', 'ab')); // false
console.log(canConstruct('aa', 'aab')); // true
console.log(
  canConstruct('bg', 'efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj')
);
module.exports = { canConstruct };

// /*
// Given an array of strings strs, group the anagrams together.
//  You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
//  typically using all the original letters exactly once.
// */

// const groupAnagrams = (strs) => {
//   //i: array of strings
//   //o: nested arrays
//   if (strs.length === 1) return [strs];

//   const map = new Map();

//   for (let word of strs) {
//     //create key of sorted word from current word
//     let sort = word.split('').sort().join('');
//     //if map does not have that key
//     if (!map.has(sort)) {
//       //create it with value of word in array
//       map.set(sort, [word]);
//     } else {
//       //else push word into array
//       map.get(sort).push(word);
//     }
//   }
//   //return array of map values
//   return [...map.values()];
// };
// console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
// console.log(groupAnagrams(['']));
// console.log(groupAnagrams(['a']));

const groupAnagrams = (strs) => {
  //i: array of strings
  //o: array of string arrays
  const arr = strs;

  //create a cache object
  const map = new Map();

  //iterate through array
  for (let str of arr) {
    //create the gibberish version of each element
    const sort = str.split('').sort().join('');
    //add that on to the object if its not already there
    !map.has(sort) ? map.set(sort, [str]) : map.get(sort).push(str);
  }
  return [...map.values()];
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
console.log(groupAnagrams(['']));
console.log(groupAnagrams(['a']));

module.exports = { groupAnagrams };

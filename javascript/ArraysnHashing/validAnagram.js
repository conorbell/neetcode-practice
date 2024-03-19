//Given two strings s and t,
//return true if t is an anagram of s,
//and false otherwise.

const isAnagram = (s, t) => {
  //i: two strings
  //o: bool

  if (s.length !== t.length) return false;

  //create hash table
  const map = new Map();

  for (i of s) {
    //set each letter as key on map
    //if map has it, increment by 1, if not assign its value 1
    map.set(i, map.get(i) + 1 || 1);
  }

  for (i of t) {
    //if map already has letter found in 2nd string
    if (map.has(i)) {
      //decrement the value of that key
      map.set(i, map.get(i) - 1);
      //if the value of the key is zero delete the key
      if (map.get(i) === 0) map.delete(i);
    }
  }
  console.log(map);

  //return true if the map is empty has no keys
  return map.size === 0;
};
console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));

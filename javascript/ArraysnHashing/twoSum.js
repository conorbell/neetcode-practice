/* Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, 
and you may not use the same element twice.
You can return the answer in any order.*/

const twoSum = (nums, t) => {
  //i: array of int, int
  //o: array

  //create hash table
  const cache = {};

  //iterate through array
  for (let i = 0; i < nums.length; i++) {
    if (cache[t - nums[i]] !== undefined) {
      return [cache[t - nums[i]], i];
    }
    cache[nums[i]] = i;
  }
};

//solution where bool is output
const boolSum = (nums, t) => {
  const cache = {};
  for (let i = 0; i < nums.length; i++) {
    if (cache[t - nums[i]]) return true;
    cache[nums[i]] = true;
  }
  return false;
};

//test cases:
// console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([4, 3, 2], 6));
console.log(twoSum([3, 3], 6));

//Given an integer array nums,
//return true if any value appears at least twice in the array,
//and return false if every element is distinct.

const containsDuplicate = (nums) => {
  //i: array of nums
  //o: boolean

  //convert nums to a set
  const set = new Set(nums);

  //if size of set and length of array dont match return true
  return set.size !== nums.length;
};

//test cases
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

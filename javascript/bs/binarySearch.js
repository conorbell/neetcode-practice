/*Given an array of integers nums which is sorted in ascending order, and an integer target
 write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity. */

const search = (nums, target) => {
  //i: array of nums, num
  //o: index position
  let lo = 0,
    hi = nums.length;

  do {
    let mid = Math.floor(lo + (hi - lo) / 2);
    let v = nums[mid];

    if (v === target) {
      return mid;
    } else if (v > target) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  } while (lo < hi);
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9)); //4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // -1

module.exports = { search };

/* 
Given an array of positive integers nums and a positive integer target, return the minimal length of a 
subarray
 whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.
 */
const minSubArrayLen = (target, nums) => {
  let minLength = Infinity,
    left = 0,
    sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    while (sum >= target) {
      minLength = Math.min(minLength, i - left + 1);
      sum -= nums[left];
      left++;
    }
  }
  return minLength === Infinity ? 0 : minLength;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2
console.log(minSubArrayLen(4, [1, 4, 4]));
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));
console.log(minSubArrayLen(6, [10, 2, 3]));

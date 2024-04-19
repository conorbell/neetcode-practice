/* 

Steps: 
1. declare results array 

2. sort input array 

3. iterate through sorted input array
   a. if our current element is not the same as the last one 
   b. intialize pointers 
      i. left will always be one ahead of current position 
      ii. right will be set to the last element in the array

   c. while left is less than right 
      i. set currentSum to be the sum of nums at left, right, and i 
      ii. if currentSum is strictly equal to 0 
        a. push nums at left, right, and i into results array 
        b. while nums[left] being equal to nums[left+ 1] increment left by 1 
        c. while nums[right] being equal to nums[right + 1] is truthy, decrement right by 1
      iii. increment and decrement left and right 
      iv. if sum is less than 0 increment left 
      v. if sum is greater than decrement right 


4. return results


*/

//-----------------SOLUTION BEYOND HERE------------------------------------

const threeSum = function (nums) {
  let results = [];
  nums = nums.sort();

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      let left = i + 1,
        right = nums.length - 1;

      while (left < right) {
        const currentSum = nums[i] + nums[left] + nums[right];

        if (currentSum === 0) {
          results.push([nums[i], nums[left], nums[right]]);
          while (nums[left] == nums[left + 1]) left++;
          while (nums[right] == nums[right - 1]) right--;
          left++;
          right--;
        } else if (currentSum > 0) {
          right--;
        } else if (currentSum < 0) {
          left++;
        }
      }
    }
  }
  return results;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4])); //[[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 1, 1])); //[]
console.log(threeSum([0, 0, 0])); //[[0,0,0]]

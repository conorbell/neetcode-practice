/*Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.
 */

const threeSum = function (nums) {
  //i: array
  //o: array
  const result = [];

  //sort array
  nums.sort((a, b) => a - b);
  //iterate through nums
  //setting our conditional to nums.length -2
  //allows us to have 2 extra spaces after i
  for (let i = 0; i < nums.length - 2; i++) {
    //check if current index is greater 0
    //and if its strictly equal to the previous element
    //if so continue to the next iteration, skip whole while loop
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    //initialize two pointers
    //left will always be after i
    let left = i + 1;
    let right = nums.length - 1;
    //while left is less than right
    while (left < right) {
      //create sum variable
      const sum = nums[i] + nums[left] + nums[right];
      //if sum is strictly equal to 0
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        //skip duplicates for left and right pointers
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4])); //[[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 1, 1])); //[]
console.log(threeSum([0, 0, 0])); //[[0,0,0]]

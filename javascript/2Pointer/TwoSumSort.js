/*Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
find two numbers such that they add up to a specific target number. 
Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.
Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
The tests are generated such that there is exactly one solution. You may not use the same element twice.
Your solution must use only constant extra space. */

const twoSum = function (numbers, target) {
  //i: array, int
  //o: indexes of array

  //create two pointers
  //initialize left to 0
  let left = 0;
  //right to numbers.length -1
  let right = numbers.length - 1;

  while (left < right) {
    //create variable sum, assign it value of adding array at left and right most index positions
    let sum = numbers[left] + numbers[right];
    //if sum is strictly equal to our target, return an array of left and right, incrementing both by 1
    if (sum === target) return [left + 1, right + 1];
    //if sum is less than target, increment left pointer
    if (sum < target) left++;
    //if sum is greater than target decrement right counter
    if (sum > target) right--;
  }
};
console.log(twoSum([2, 7, 11, 15], 9)); //[1,2]
console.log(twoSum([2, 3, 4], 6)); //[1,3]
console.log(twoSum([-1, 0], -1)); //[1,2]

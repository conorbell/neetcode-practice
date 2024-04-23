/* 
Steps 

1. Initialize two pointers for both ends of the array and a maxArea value
2. While left lis less than right 
  a. initialize area to be the product of the difference between left and right, which is the length, and the smallest value between height[left] and height[right]
  b. update maxArea to be the greatest value of maxArea and area
  c. if height[left] < height[right] increment left pointer 
  d. else increment right

*/

//-------SOLUTION---------------

const maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;

  let maxArea = 0;

  while (left < right) {
    let area = (right - left) * Math.min(height[left], height[right]);
    maxArea = Math.max(maxArea, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};

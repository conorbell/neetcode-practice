/* You are given an integer array height of length n. 
There are n vertical lines drawn such that the two endpoints
 of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, 
such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

*/

/**
 * @param {number[]} height
 * @return {number}
 */
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
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); //49
console.log(maxArea([1, 1])); //1

module.exports = { maxArea };

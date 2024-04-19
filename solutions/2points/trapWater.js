/* 
Rundown 

so we have an elevation map(array) where each bar is 1 unit wide and the element represents the height 

in this array [1, 2, 4] you have 1 block, followed by 2 stacked on top of each other, followed by 4 stacked on top of each other 

the most water that can be held in there is dependent on the minimum height on the left and right sides.

the most water we can trap per side is dependent on the difference between the max value for the side and the current position 


Steps: 
1. Define pointers 
    a. left 
    b. right 
    c. maxRight 
    d. maxLeft 
    e. maxRain 

2. Iterate through array using pointers, while left is less than right 

3. If maxLeft is less than maxRight
    a. increment left by 1 
    b. update maxLeft to be the max value of maxLeft and height[left]
    c. add the difference between maxLeft and height[left] to maxRain 

4. else 
    a. decrement right 
    b. update maxRight to be the greatest of the two vals, maxRight and height[right]
    c. add the difference between maxRight and height[right] to maxRain 

5. return maxRain 


The maximum amount of rain is going to be the difference 
*/

//------------------------SOLUTION LIES BEYOND HERE--------------------------------------

const trap = (height) => {
  let left = 0,
    right = height.length - 1,
    maxLeft = height[left],
    maxRight = height[right],
    maxRain = 0;

  while (left < right) {
    if (maxLeft < maxRight) {
      left++;
      maxLeft = Math.max(maxLeft, height[left]);
      maxRain += maxLeft - height[left];
    } else {
      right--;

      maxRight = Math.max(maxRight, height[right]);

      maxRain += maxRight - height[right];
    }
  }
  return maxRain;
};

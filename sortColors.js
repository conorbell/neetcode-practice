/* Given an array nums with n objects colored red, white, or blue, 
sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.*/

var sortColors = function (nums) {
  const arr = nums;

  let l = 0;
  let r = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[l]) {
      while (l < r) {
        let holder;
        console.log(arr[l]);
        console.log(arr[i]);
        console.log(arr[r]);
        if (arr[l] > arr[r]) {
          holder = arr[l];
          arr[l] = arr[r];
          arr[r] = holder;
        }

        r--;
      }
    }
  }

  return arr;
};

console.log(sortColors([2, 0, 2, 1, 1, 0])); //

console.log(sortColors([2, 0, 1])); //[0,1,2]

/* 
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.


*/

var merge = function (nums1, m, nums2, n) {
  const len = m + n;
  nums1.splice(len - n);
  for (let i = 0; i < n; i++) {
    nums1.push(nums2[i]);
  }

  for (let j = 1; j < len; j++) {
    if (nums1[j - 1] || nums1[j - 1] === 0) {
      if (nums1[j] < nums1[j - 1]) {
        let tmp = nums1[j - 1];
        nums1[j - 1] = nums1[j];
        nums1[j] = tmp;
        j = j - 2;
      }
    }
  }
  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); //[1,2,2,3,5,6]
// console.log(merge([1], 1, [], 0)); //[1]

// console.log(merge([0], 0, [1], 1)); //[1]

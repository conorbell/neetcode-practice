const search = (nums, target) => {
  //i: array of nums, num
  //o: index position

  let lo = 0;
  let hi = nums.length;

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

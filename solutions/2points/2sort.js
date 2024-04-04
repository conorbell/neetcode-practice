const twoSum = function (numbers, target) {
  //i: array, int
  //o: indexes of array

  let l = 0,
    r = numbers.length - 1;

  while (l < r) {
    let sum = numbers[l] + numbers[r];
    console.log(sum);

    if (sum === target) {
      return [l + 1, r + 1];
    } else if (sum < target) {
      l++;
    } else {
      r--;
    }
  }
};

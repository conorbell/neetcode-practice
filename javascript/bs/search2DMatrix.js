/*
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

*/

const searchMatrix = (matrix, target) => {
  //i: nested arrays, int
  //o: boolean

  console.log(matrix);

  //iterate through outer array
  // for (let i = 0; i < matrix.length; i++) {
  //   console.log(matrix[i]);
  //   //check if index at length-1 of first array is less than or equal to target
  //   if (matrix[i][0] <= target) {
  //     for (let j = 0; j < matrix[i].length; j++) {
  //       if (matrix[i][j] === target) return true;
  //     }
  //   }
  // }
  // return false;

  // if (matrix[mid][0] > target) {
  //   return searchMatrix(matrix.slice(0, mid));
  // }
  // console.log(matrix[mid][0])

  // if(matrix[mid][0] < target){
  //   console.log(matrix[mid])
  // }
  let lo = 0;
  let hi = matrix.length;
  let mid = Math.floor(lo + (hi - lo) / 2);
  let v = matrix[mid];

  if (v[0] <= target) {
    for (let i = 0; i < v.length; i++) {
      if (v[i] === target) return true;
    }
  }

  if (v[0] === target) return true;

  if (v[0] > target) {
    if (matrix.length > 1) {
      return searchMatrix(matrix.slice(0, mid), target);
    }
  }

  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
); // true

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  )
); //false

console.log(searchMatrix([[1]], 0));
console.log(searchMatrix([[1]], 1));
console.log(searchMatrix([[1], [3], [5]], 5));

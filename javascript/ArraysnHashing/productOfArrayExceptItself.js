// /*
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.
// */
// const productExceptSelf = (nums) => {
//   //i: array
//   //o: array

//   //create result array
//   let result = [];
//   //create two pointers, initialize to 1
//   let left = 1;
//   let right = 1;

//   //iterate from the beginning of array
//   for (let i = 0; i < nums.length; i++) {
//     //result at current index is left
//     result[i] = left;
//     //multiply value of left by nums at its current index
//     left *= nums[i];
//   }
//   console.log(result);

//   //iterate from the end of the array
//   for (let i = nums.length - 1; i >= 0; i--) {
//     console.log(result[i]);
//     result[i] = right * result[i];
//     console.log(result[i]);
//     right *= nums[i];
//   }
//   return result;
// };

// //test
// const first = [1, 2, 3, 4];
// const second = [-1, 1, 0, -3, 3];
// console.log(productExceptSelf(first)); //[24,12,8,6]
// // console.log(productExceptSelf(second)); //[0,0,9,0,0]

/* Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation. */

/* 
[1,2,3,4] -> [24, 12, 8, 6]

1 -> 2*3*4 -> 24 
2 -> 1*3*4 -> 12
3 -> 4*2*1 -> 8
4 -> 1*2*3 -> 6

result = []
l = 1 
r = 1

forward iterate through nums 

i0
result[i0] = l(1)
l(1) *= nums[i0](1)
result = [1]
l=1

i1
result[i1] = l(1)
l(1) *= nums[i1](2)
result=[1,1]
l=2

i2
result[i2] = l(2)
l(2)*=nums[i2](3)
result=[1,1,2]
l=6

i3
result[i3]=l(6)
l(6)*=nums[i3]
result=[1,1,2,6]
l=24 but that don't matter


backwards iterate through nums 
nums=[1,2,3,4]
result=[1,1,2,6]
r=1
i=nums.length-1(3) i>=0 i--

i3
r(1)
result[i3]= result[i3]*r(1)
r(1) *= nums[i3](4)
result=[1,1,2,6]
r=4

i2
result[i2](2)=result[i2](2)*r(4) -> 8
r(4) *= nums[i2](3)
result=[1,1,8,6]
r=12

i1
result[i1](1)=result[i](1)*r(12) -> 12
r(12) *= nums[i1](2)
r=24
result=[1,12,8,6]

i0
result[i0](1)=result[i0](1)*r(24) -> 24
r(24)*=nums[i0](1)
r=24
result=[24,12,8,6]
*/
// const productExceptSelf = (nums) => {
//   //i: array of numbers
//   //o: array

//   const result = [];

//   //two pointers?
//   let l = 1;
//   let r = 1;

//   for (let i = 0; i < nums.length; i++) {
//     result[i] = l;
//     l *= nums[i];
//   }

//   for (let i = nums.length - 1; i >= 0; i--) {
//     result[i] = r * result[i];
//     r *= nums[i];
//   }
//   console.log(result);
//   return result;
// };

const productExceptSelf = (arr) => {
  //i: array
  //o: array

  const output = [];
  let l = 1;
  let r = 1;

  for (let i = 0; i < arr.length; i++) {
    output[i] = l;
    l *= arr[i];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    output[i] = output[i] * r;
    r *= arr[i];
  }
  return output;
};

const first = [1, 2, 3, 4];
const second = [-1, 1, 0, -3, 3];
console.log(productExceptSelf(first)); //[24,12,8,6]
console.log(productExceptSelf(second)); //[0,0,9,0,0]

module.exports = { productExceptSelf };

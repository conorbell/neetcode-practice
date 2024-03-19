// /*Given an integer array nums and an integer k,
//  return the k most frequent elements.
// You may return the answer in any order. */

import { log } from 'console';

// const { log } = require('console');

// // const topKFrequent = (nums, k) => {
// //   //i: array of int, int
// //   //o: array

// //   //create map obj
// //   const map = new Map();
// //   //create buckets array
// //   const buckets = [];
// //   //create results array
// //   const results = [];

// //   //populate buckets array
// //   for (let i = 0; i <= nums.length; i++) {
// //     buckets.push([]);
// //   }
// //   console.log(nums.length);
// //   console.log(buckets.length);

// //   //populate map
// //   //key-num
// //   //val-frequency
// //   for (num of nums) {
// //     if (!map.has(num)) {
// //       map.set(num, 1);
// //     } else {
// //       map.set(num, map.get(num) + 1);
// //     }
// //   }

// //   //assign frequency to buckets index position
// //   //assign key to element at index position
// //   for (let [key, freq] of map) {
// //     if (!buckets[freq] !== undefined) buckets[freq].push(key);
// //   }

// //   for (let i = buckets.length - 1; i > 0 && results < k; i--) {
// //     if (buckets[i] !== undefined) results.push(...buckets[i]);
// //     //   }
// //     //   return results;
// //   }
// //   return results;
// // };
// // console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); //[1,2]
// // // console.log(topKFrequent([1], 1)) // [1]

// /*
// Given an integer array nums and an integer k, return the k most frequent elements.
//  You may return the answer in any order.

//  if k is 2 than return the 2 most frequent elements

// */

// const topKFrequent = (arr, k) => {
//   //i: array, int
//   //o: array

//   //create a frequency object

//   const map = new Map();

//   //create a buckets array
//   const buckets = [];

//   //create a results array
//   const results = [];

//   //create an array of empty buckets, one longer than input array
//   //set it to be greater or equal than to account for 0 indexing
//   for (let i = 0; i <= arr.length; i++) {
//     buckets.push([]);
//   }

//   console.log(buckets.length);
//   console.log(arr.length);

//   //populate frequency obj
//   for (let num of arr) {
//     if (!map.has(num)) {
//       map.set(num, 1);
//     } else {
//       map.set(num, map.get(num) + 1);
//     }
//   }

//   //populate buckets, use frequency as index position and value as element
//   for (let [k, v] of map) {
//     console.log(v);
//     console.log(buckets[v]);
//     buckets[v].push(k);
//   }

//   console.log(results < k);
//   //now we have to populate the results array, the most frequent elements in buckets are to the right
//   for (let i = buckets.length - 1; i > 0 && results < k; i--) {
//     console.log(i);
//     if (buckets[i] !== undefined) results.push(...buckets[i]);
//   }

//   return results;
// };

const topKFrequent = (nums, k) => {
  //i: array of nums and int
  //o: array

  //buckets array
  const buckets = [];
  //results array
  const results = [];
  //map
  const map = new Map();

  //populate buckets with empty buckets
  for (let i = 0; i <= nums.length; i++) {
    buckets.push([]);
  }

  //populate map with frequency as val and element as key
  for (let num of nums) {
    !map.has(num) ? map.set(num, 1) : map.set(num, map.get(num) + 1);
  }
  console.log(map);

  //populate buckets with map key:vals -> key = index, value = element
  for (let [num, freq] of map) {
    buckets[freq].push(num);
  }
  console.log(buckets);

  //populate results array, backward iterate through buckets so long as length
  //of results is less than k
  for (let i = buckets.length - 1; i > 0 && results.length < k; i--) {
    if (buckets[i]) results.push(...buckets[i]);
    console.log(results.length);
  }
  return results;
};

// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); //[1,2]
// console.log(topKFrequent([1], 1)); // [1]
console.log(topKFrequent([3, 0, 1, 0], 1));

module.exports = { topKFrequent };

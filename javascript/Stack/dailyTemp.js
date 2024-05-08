/*
Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.
*/

var dailyTemperatures = function (temperatures) {
  const stack = [];
  const result = new Array(temperatures.length).fill(0);

  for (let i = temperatures.length - 1; i >= 0; --i) {
    while (stack.length > 0 && temperatures[i] >= temperatures[stack[0]]) {
      stack.shift();
    }

    if (stack.length === 0) {
      result[i] = 0;
    } else {
      result[i] = stack[0] - i;
    }

    stack.unshift(i);
  }

  return result;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1, 1, 4, 2, 1, 1, 0, 0]
// console.log(dailyTemperatures([30, 40, 50, 60])); // [1, 1, 1, 0]
// console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1, 1, 0]
module.exports = dailyTemperatures;

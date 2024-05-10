/*There are n cars going to the same destination along a one-lane road. The destination is target miles away.

You are given two integer array position and speed, both of length n, where position[i] is the position of the ith car and speed[i] is the speed of the ith car (in miles per hour).

A car can never pass another car ahead of it, but it can catch up to it and drive bumper to bumper at the same speed. The faster car will slow down to match the slower car's speed. The distance between these two cars is ignored (i.e., they are assumed to have the same position).

A car fleet is some non-empty set of cars driving at the same position and same speed. Note that a single car is also a car fleet.

If a car catches up to a car fleet right at the destination point, it will still be considered as one car fleet.

Return the number of car fleets that will arrive at the destination. */

var carFleet = function (target, position, speed) {
  //get number of cars
  const numberOfCars = position.length;

  //initialize empty pairs array
  let pair = [];
  //populate pair array with position and speed at same indexes
  position.forEach((ele, i) => {
    pair.push([position[i], speed[i]]);
  });

  //sort pairs in descending order based on first element of each array
  pair.sort((a, b) => b[0] - a[0]);

  //create a stack
  let stack = [];

  //iterate through pairs
  pair.forEach((car, i) => {
    //calculate time it'll take car[0] to reach target
    stack.push((target - car[0]) / car[1]);

    const stackLength = stack.length;

    if (stack.length >= 2 && stack[stackLength - 1] <= stack[stackLength - 2]) {
      stack.pop();
    }
  });
  return stack.length;
};
//first test case
const target = 12,
  position = [10, 8, 0, 5, 3],
  speed = [2, 4, 1, 1, 3];

console.log(carFleet(target, position, speed)); //3

//second
// const target = 10,
//   position = [3],
//   speed = [3];
// console.log(carFleet(target, position, speed)); //1

// //third
// const target = 100,
//   position = [0, 2, 4],
//   speed = [4, 2, 1];
// console.log(carFleet(target, position, speed)); //1

module.exports = carFleet;

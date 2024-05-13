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

const carFleet = require('../../javascript/Stack/carFleet');

describe('Car Fleet tests', () => {
  it('Test 1', () => {
    const target = 12,
      position = [10, 8, 0, 5, 3],
      speed = [2, 4, 1, 1, 3];
    expect(carFleet(target, position, speed)).toEqual(3);
  });
  it('Test 2', () => {
    const target = 10,
      position = [3],
      speed = [3];
    expect(carFleet(target, position, speed)).toEqual(1);
  });

  it('Test 3', () => {
    const target = 100,
      position = [0, 2, 4],
      speed = [4, 2, 1];
    expect(carFleet(target, position, speed)).toEqual(1);
  });
});

const dailyTemperatures = require('../../javascript/Stack/dailyTemp');

describe('Daily Temperature tests', () => {
  it('Test 1', () => {
    const temperature = [73, 74, 75, 71, 69, 72, 76, 73];
    expect(dailyTemperatures(temperature)).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
  });
  it('Test 2', () => {
    const temperature = [30, 40, 50, 60];
    expect(dailyTemperatures(temperature)).toEqual([1, 1, 1, 0]);
  });
  it('Test 3', () => {
    const temperature = [73, 74, 75, 71, 69, 72, 76, 73];
    expect(dailyTemperatures(temperature)).toEqual([1, 1, 0]);
  });
});

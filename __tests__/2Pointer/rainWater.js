const { trap } = require('../../javascript/2Pointer/rainWater');

describe('Trapping Rain Water', () => {
  test(' return 6 when height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]', () => {
    let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

    expect(trap(height)).toBe(6);
  });
  test('return 9 when height = [4, 2, 0, 3, 2, 5]', () => {
    let height = [4, 2, 0, 3, 2, 5];

    expect(trap(height)).toBe(9);
  });
});

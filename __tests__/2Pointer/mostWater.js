const { maxArea } = require('../../javascript/2Pointer/mostwater');

describe('Max Area tests', () => {
  let height;
  test('returns 49 when height = [1,8,6,2,5,4,8,3,7]', () => {
    height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

    expect(maxArea(height)).toBe(49);
  });
  test('returns 1 when height = [1,1]', () => {
    height = [1, 1];

    expect(maxArea(height)).toBe(1);
  });
});

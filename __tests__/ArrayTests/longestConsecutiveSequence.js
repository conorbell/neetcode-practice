const {
  longestConsecutive,
} = require('../../javascript/ArraysnHashing/longestConsecutiveSequence');

describe('test for Longest Consecutive Sequence', () => {
  it('should return 4 when nums is [100,4,200,1,3,2] ', () => {
    const nums = [100, 4, 200, 1, 3, 2];
    expect(longestConsecutive(nums)).toBe(4);
  });
  it('should return 9 when nums is [0,3,7,2,5,8,4,6,0,1] ', () => {
    const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
    expect(longestConsecutive(nums)).toBe(9);
  });
  it('should return 7 when nums is [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6] ', () => {
    const nums = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6];
    expect(longestConsecutive(nums)).toBe(7);
  });
});

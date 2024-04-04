const { isValid } = require('../../javascript/Stack/validParens');

describe('isValid test', () => {
  it('should return true for valid input: () ', () => {
    expect(isValid('()')).toBe(true);
  });
  it('should return true for valid input: [] ', () => {
    expect(isValid('[]')).toBe(true);
  });
  it('should return true for valid input: {} ', () => {
    expect(isValid('{}')).toBe(true);
  });

  it('Should return true for valid input: ()[]{}', () => {
    expect(isValid('()[]{}')).toBe(true);
  });
  it('Should return false for invalid input: (]', () => {
    expect(isValid('(]')).toBe(false);
  });
});

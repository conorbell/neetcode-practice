const { maxProfit } = require('../../javascript/slidingWindow/stocks');

describe('maxProfit test', () => {
  let prices;

  it('Function should return 0 if input is invalid', () => {
    expect(maxProfit(prices)).toEqual(0);
  });

  it("Function should return 0 if there's no possibility of making a profit", () => {
    prices = [7, 6, 4, 3, 1];
    expect(maxProfit(prices)).toEqual(0);
    expect(maxProfit([])).toEqual(0);
  });

  it('Function should return the highest profit possible', () => {
    prices = [0, 2000, 4000, 6000, 8000, 10000];
    expect(maxProfit(prices)).toEqual(10000);
    prices = [2000, 1000, 100, 200, 400, 100];
    expect(maxProfit(prices)).toEqual(300);
    prices = [8, 5, 4, 3, 2, 7, 2];
    expect(maxProfit(prices)).toEqual(5);
    prices = [7, 1, 5, 3, 6, 4];
    expect(maxProfit(prices)).toEqual(5);
  });

  it('Function should return the highest profit possible when given multiple possible profits', () => {
    prices = [1000, 500, 1000, 1500, 0, 200, 800, -10, 0, 100];
    expect(maxProfit(prices)).toEqual(1000);
    prices = [0, 300, 200, 500, 600, 100, 399, 350, 500];
    expect(maxProfit(prices)).toEqual(600);
    prices = [200, 600, 700, 100, 300, 200, 620];
    expect(maxProfit(prices)).toEqual(520);
  });
});

/*

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy 
one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. 
If you cannot achieve any profit, return 0.

*/

/**
 * Steps:
 * 1. Declare variables for max profit and buying price. Buying prices will always be first
 * 2. Iterate through prices
 * 3. Current element will be sell price
 * 4. Calculate difference between sell and buy
 * 5. Calculate the max value between proift and max profit
 * 6. If sell price is less than buy price reassign buy price
 */

const maxProfit = (prices) => {};

module.exports = { maxProfit };

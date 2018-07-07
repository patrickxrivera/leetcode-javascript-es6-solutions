/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = (prices) => {
  let max = 0;
  let currMin = Math.min(prices[0], prices[1]);

  for (let i = 1; i < prices.length; i++) {
    currMin = Math.min(currMin, prices[i]);
    max = Math.max(prices[i] - currMin, max);
  }

  return max;
};

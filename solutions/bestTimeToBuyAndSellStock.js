/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = (prices) => {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    const currNum = prices[i];

    const potentialProfit = currNum - minPrice;

    maxProfit = Math.max(potentialProfit, maxProfit);
    minPrice = Math.min(currNum, minPrice);
  }

  return maxProfit;
};

const isNewMin = (currNum, min) => currNum < min;

const prices = [20, 3, 6];

maxProfit(prices);

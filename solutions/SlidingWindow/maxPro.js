const maxProfit = (prices) => {
  if (!prices) return 0;

  let maxPro = 0,
    buyPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    let sellPrice = prices[i];

    let profit = sellPrice - buyPrice;

    maxPro = Math.max(maxPro, profit);

    if (sellPrice < buyPrice) buyPrice = sellPrice;
  }
  return maxPro;
};

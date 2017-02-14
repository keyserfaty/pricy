export const generateSinglePrice = int => price =>
  Math.round(Number(price) * (int + 100)) / 100;

export const generatePricesList = prices => ({
  price: prices.price,
  priceCard: generateSinglePrice(prices.interest.due3)(prices.price),
  priceCardInterest: generateSinglePrice(prices.interest.due12)(prices.price)
});

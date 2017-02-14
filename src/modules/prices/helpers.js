export const generateSinglePrice = interest => price =>
  Math.round(price * (interest + 100)) / 100;

export const generatePrices = instalments => price =>
  instalments.reduce((res, elem) => {
    const each = {
      instalments: elem.quantity,
      price: generateSinglePrice(elem.interest)(price)
    };

    res.push(each);
    return res;
  }, []);

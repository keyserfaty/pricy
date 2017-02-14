export const generateSinglePrice = interest => price =>
  Math.round(price * (interest + 100)) / 100;

export const generateSinglePriceInInstalments = (interest, instalments) => price =>
  Math.round(generateSinglePrice(interest)(price) / instalments);

export const generatePrices = instalments => price =>
  instalments.reduce((res, elem) => {
    const each = {
      instalments: elem.quantity,
      price: generateSinglePrice(elem.interest)(price)
    };

    res.push(each);
    return res;
  }, []);

export const generatePricesForPrint = instalments => price =>
  instalments.reduce((res, elem) => {
    const each = {
      instalments: elem.quantity,
      interest: elem.interest,
      price: generateSinglePriceInInstalments(elem.interest, elem.quantity)(price)
    };

    res.push(each);
    return res;
  }, []);

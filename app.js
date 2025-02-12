const oneEuroIs = {
    JPY: 156.5, // 1 EUR = 156.5 JPY
    USD: 1.07,  // 1 EUR = 1.07 USD
    GBP: 0.87,  // 1 EUR = 0.87 GBP
  };
  function fromDollarToYen(amountInUSD) {
    const amountInEUR = amountInUSD / oneEuroIs.USD;
    const amountInJPY = amountInEUR * oneEuroIs.JPY;
    return amountInJPY;
  }
  function fromEuroToDollar(amountInEUR) {
    return amountInEUR * oneEuroIs.USD;
  }
  function fromYenToPound(amountInJPY) {
    const amountInEUR = amountInJPY / oneEuroIs.JPY;
    const amountInGBP = amountInEUR * oneEuroIs.GBP;
    return amountInGBP;
  }
  module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };

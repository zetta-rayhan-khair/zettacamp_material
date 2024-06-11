// termCalculator.js
const calculateTermCredit = async (principal, interestRate, termLength) => {
  return new Promise((resolve, reject) => {
    try {
      const monthlyInterestRate = interestRate / 12 / 100;
      const numberOfPayments = termLength * 12;

      const monthlyPayment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
      resolve(monthlyPayment);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { calculateTermCredit };

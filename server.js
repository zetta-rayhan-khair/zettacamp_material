// server.js
const express = require('express');
const { calculateTermCredit } = require('./termCalculator');
const app = express();

app.use(express.json());

app.post('/calculate-term', async (req, res) => {
  const { principal, interestRate, termLength } = req.body;

  try {
    const monthlyPayment = await calculateTermCredit(principal, interestRate, termLength);
    res.status(200).json({ monthlyPayment });
  } catch (error) {
    res.status(500).json({ error: 'Error calculating term credit' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post('/purchase-book', async (req, res) => {
  const { bookPrice, interestRate, termLength, additionalPrice } = req.body;

  try {
    const totalPrincipal = bookPrice + additionalPrice;
    const monthlyPayment = await calculateTermCredit(totalPrincipal, interestRate, termLength);
    res.status(200).json({ monthlyPayment, totalPrincipal });
  } catch (error) {
    res.status(500).json({ error: 'Error processing book purchase' });
  }
});

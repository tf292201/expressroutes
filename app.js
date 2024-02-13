const express = require('express');
const app = express();

// Route for calculating the mean
app.get('/mean', (req, res) => {
  // Logic to calculate the mean
  // ...

  res.send(`Mean: ${mean}`);
});

// Route for calculating the mode
app.get('/mode', (req, res) => {
  // Logic to calculate the mode
  // ...

  res.send(`Mode: ${mode}`);
});

// Route for calculating the median
app.get('/median', (req, res) => {
  // Logic to calculate the median
  // ...

  res.send(`Median: ${median}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

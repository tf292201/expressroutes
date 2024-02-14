const express = require('express');
const app = express();
const errorEvent = require('./errorClass');




// Route for calculating the mean
app.get('/mean', (req, res, next) => {
    if (!req.query.nums) {
        throw new errorEvent'You must pass a query key of nums with a comma-separated list of numbers', 400);
    }

    const numbers = req.query.nums.split(',').map(Number);

    if (numbers.some(isNaN)) {
        throw new errorEvent('Values must be numbers', 400);
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const mean = sum / numbers.length;

    res.send(`Mean: ${mean}`);
});



// Route for calculating the mode
app.get('/mode', (req, res, next) => {
    if (!req.query.nums) {
        throw new errorEvent('You must pass a query key of nums with a comma-separated list of numbers', 400);
    }

    const numbers = req.query.nums.split(',').map(Number);

    if (numbers.some(isNaN)) {
        throw new errorEvent('Values must be numbers', 400);
    }

    let mode = 0;
    let count = 0;
    for (let num of numbers) {
        let tempCount = 0;
        for (let num2 of numbers) {
            if (num === num2) {
                tempCount++;
            }
        }
        if (tempCount > count) {
            mode = num;
            count = tempCount;
        }
    }

    res.send(`Mode: ${mode}`);
});


// Route for calculating the median
app.get('/median', (req, res) => {
    if (!req.query.nums) {
      throw new errorEvent('You must pass a query key of nums with a comma-separated list of numbers', 400);
    }
    numbers = req.query.nums.split(',').sort((a, b) => a - b);
    let median = 0;
    if (numbers.length % 2 === 0) {
      median = (parseFloat(numbers[numbers.length / 2 - 1]) + parseFloat(numbers[numbers.length / 2])) / 2;
    } else {
      median = parseFloat(numbers[Math.floor(numbers.length / 2)]);
    }
  res.send(`Median: ${median}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

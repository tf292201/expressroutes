const express = require('express');
const app = express();
const ErrorEvent = require('./errorClass.js');

// Route for calculating the mean
app.get('/mean', (req, res) => {
    try {
        if (!req.query.nums) {
            throw new ErrorEvent('You must pass a query key of nums with a comma-separated list of numbers', 400);
        }

        const numbers = req.query.nums.split(',').map(Number);

        if (numbers.some(isNaN)) {
            throw new ErrorEvent('Values must be numbers', 400);
        }

        const sum = numbers.reduce((acc, num) => acc + num, 0);
        const mean = sum / numbers.length;

        res.send(`Mean: ${mean}`);
    } catch (error) {
        res.status(error.status).send(error.message);
    }
});

// Route for calculating the mode
app.get('/mode', (req, res, next) => {
    try {
        if (!req.query.nums) {
            throw new ErrorEvent('You must pass a query key of nums with a comma-separated list of numbers', 400);
        }

        const numbers = req.query.nums.split(',').map(Number);

        if (numbers.some(isNaN)) {
            throw new ErrorEvent('Values must be numbers', 400);
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
    } catch (error) {
        res.status(error.status).send(error.message);
    }
});

// Route for calculating the median
app.get('/median', (req, res) => {
    try {
        if (!req.query.nums) {
            throw new ErrorEvent('You must pass a query key of nums with a comma-separated list of numbers', 400);
        }
        const numbers = req.query.nums.split(',').map(Number);
        
        if (numbers.some(isNaN)) {
            throw new ErrorEvent('Values must be numbers', 400);
        }

        if (numbers.length === 0) {
            throw new ErrorEvent('At least one number must be provided', 400);
        }

        numbers.sort((a, b) => a - b);
        let median = 0;
        if (numbers.length % 2 === 0) {
            median = (parseFloat(numbers[numbers.length / 2 - 1]) + parseFloat(numbers[numbers.length / 2])) / 2;
        } else {
            median = parseFloat(numbers[Math.floor(numbers.length / 2)]);
        }
        res.send(`Median: ${median}`);
    } catch (error) {
        res.status(error.status).send(error.message);
    }
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

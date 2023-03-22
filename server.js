const express = require('express');
const app = express();

// greeting

app.get('/greeting', (req, res) => {
    res.send('Hello, stranger!');
  });

app.get('/greeting/:sally', (req, res) => {
    res.send('Wow, hello there, Sally!')
});

// tip calculator

app.get('/tip', (req,res) => {
    res.send()
})

app.get('/tip/:total', (req,res) => {
    res.send()
})

app.get('/tip/:tipPercentage', (req,res) => {
    res.send()
})

// magic 8 ball


// pass it around

app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
const express = require('express');
const app = express();

// greeting

app.get('/greeting', (req, res) => {
    res.send('Hello, stranger!');
  });

app.get('/greeting/:sally', (req, res) => {
    res.send('Wow, hello there, Sally!')
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
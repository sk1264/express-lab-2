const express = require('express');
const app = express();

// greeting

app.get('/greeting', (req, res) => {
    res.send('Hello, stranger!');
  });

app.get('/greeting/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Wow, hello there, ${name}!`);
});

// tip calculator

app.get('/tip/:total/:tipPercentage', (req,res) => {
})


// magic 8 ball

// app.get('/magic', (req, res) => {
//     res.send('');
//   });

//   ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]


// pass it around

app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
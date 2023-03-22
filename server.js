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
    const total = Number(req.params.total);
    const tipPercentage = Number(req.params.tipPercentage);
    const tipAmount = (total * tipPercentage) / 100;
    res.send(`${tipAmount}`);
})

// magic 8 ball

magicResponses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]


app.get('/magic/:question', (req, res) => {
    const question = req.params.question;
    const response = magicResponses[Math.floor(Math.random() * magicResponses.length)];
    res.send(`<h1> Ask the Magic 8 Ball: ${question} </h1> <h1>Your response: ${response}</h1>`);
  });

// pass it around

app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
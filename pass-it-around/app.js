const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(`<h1>99 Bottles of beer on the wall</h1>
    `)
});
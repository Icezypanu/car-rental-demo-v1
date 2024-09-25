const express = require('express');
const { getQuote } = require("node-quotegen");
const app = express();
const port = 8000;

app.get('/api/quote', (req, res) => {
    const quote = getQuote()
    res.json({quote});
});

app.listen(port, ()=>{
    console.log(`Server running at ${port}`)
})
require("dotenv").config()

const express = require("express")
const app = express()
const PORT = process.env.PORT || 3001;
const pokemon = require('./models/pokemon.js');

app.get("/pokemon", (req, res) => {
    res.send(pokemon)
})


app.listen(PORT, () => {
    console.log("working")
})


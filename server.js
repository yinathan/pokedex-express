const express = require("express")
const app = express()
const PORT = process.env.PORT || 3001
const pokemon = require('./models/pokemon.js');




app.listen(PORT, () => {
    console.log("working")
})


require("dotenv").config()

const express = require("express")
const app = express()
const PORT = process.env.PORT || 3001;
const pokemon = require('./models/pokemon.js');

// Index   GET /pokemon
app.get("/pokemon", (req, res) => {
    res.send(pokemon)
})

// Show  GET /pokemon/:id

// New GET /pokemon/new

//Edit GET /pokemon/:id/edit

// Create POST /pokemon

// Update  PUT  /pokemon/:id

// Destroy  Delete   /pokemon/:id


app.listen(PORT, () => {
    console.log("working")
})


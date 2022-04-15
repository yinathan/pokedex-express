require("dotenv").config()

const express = require("express")
const app = express()
const PORT = process.env.PORT || 3001;
const pokemon = require('./models/pokemon.js');
const morgan = require("morgan")
const methodOverride = require("method-override")

app.use(express.urlencoded({ extended: false }));
app.use(morgan("tiny"));
app.use("/static", express.static("public"));
app.use(methodOverride("_method"));


// Index   GET /pokemon
app.get("/pokemon", (req, res) => {
    res.render("index.ejs", { pokedex: pokemon })
})

// Show  GET /pokemon/:id
app.get("/pokemon/:id", (req, res) => {
    
    res.render("show.ejs", { pokeIndex: pokemon[req.params.id] })
    
})

// New GET /pokemon/new

//Edit GET /pokemon/:id/edit

// Create POST /pokemon

// Update  PUT  /pokemon/:id

// Destroy  Delete   /pokemon/:id


app.listen(PORT, () => {
    console.log("working")
})


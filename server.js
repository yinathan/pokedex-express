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



// New GET /pokemon/new
app.get("/pokemon/new", (req, res) => {
    res.render("new.ejs", {pokemon: pokemon})
})
//Edit GET /pokemon/:id/edit
app.get("/pokemon/:id/edit", (req, res) => {
    res.send("working")
})
// Create POST /pokemon
app.post('/pokemon', (req, res) => {
    pokemon.push(req.body)
    res.redirect("/pokemon")
})
// Update  PUT  /pokemon/:id

// Destroy  Delete   /pokemon/:id
app.delete("/pokemon/:id", (req, res) => {
  const index = req.params.id;
  pokemon.splice(index, 1);
  res.redirect("/pokemon");
});
// Show  GET /pokemon/:id
app.get("/pokemon/:id", (req, res) => {
    res.render("show.ejs", { pokeIndex: pokemon[req.params.id] })
})

app.listen(PORT, () => {
    console.log("working")
})


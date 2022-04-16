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
    res.render("edit.ejs", {
    pokemon: pokemon[req.params.id],
    index: req.params.id
  })
})
// Create POST /pokemon
app.post('/pokemon', (req, res) => {
    
    req.body.stats = {
      hp: req.body.hp,
      attack: req.body.attack,
      defense: req.body.defense,
      spattack: req.body.spattack,
      spdefense: req.body.spdefense,
      speed: req.body.speed,
    };
    console.log(req.body.type)
    pokemon.unshift(req.body)
    res.redirect("/pokemon")
})
// Update  PUT  /pokemon/:id
app.put("/pokemon/:id", (req, res) => {
  req.body.stats = {
    hp: req.body.hp,
    attack: req.body.attack,
    defense: req.body.defense,
    spattack: req.body.spattack,
    spdefense: req.body.spdefense,
    speed: req.body.speed,
  }
    pokemon[req.params.id] = req.body
    res.redirect("/pokemon");
  });

// Destroy  Delete   /pokemon/:id
app.delete("/pokemon/:id", (req, res) => {
  pokemon.splice(req.params.id, 1);
  res.redirect("/pokemon");
});
// Show  GET /pokemon/:id
app.get("/pokemon/:id", (req, res) => {
    res.render("show.ejs", { pokeIndex: pokemon[req.params.id] })
})

app.listen(PORT, () => {
    console.log("working")
})


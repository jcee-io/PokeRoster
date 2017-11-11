var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mongo');
var Pokedex = require('pokedex-promise-v2');
var db = require('../database-mongo/index');
var pokemonDB = require('pokemon');
var app = express();

var P = new Pokedex();


var allPokemon = pokemonDB.all().sort();
var pokeQuery = [];

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.get('/pokemon', function (req, res) {

  db.selectAll()
  .then(pokemon => {
  	res.json(db.selectAll());
  });

});

app.get('/pokelist', function(req, res) {
	res.json(pokeQuery);
});

app.post('/pokemon', function (req, res) {
	console.log(req.body.query);
	var pokemon = req.body.query;

	pokeQuery = pokemonDB.all().filter(item => item.toLowerCase().includes(pokemon));
	
	res.end();
	
	// P.getPokemonByName(pokemon)
	// 	.then(info => {

	// 		var pokeInfo = {
	// 			name: pokemon,
	// 			photo: info.sprites.front_default
	// 		}

	// 		db.save(pokeInfo);
	// 	});
});

app.listen(process.env.PORT || 3001, function() {
  console.log('listening on port 3001!');
});


var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mongo');
var Pokedex = require('pokedex-promise-v2');
var db = require('../database-mongo/index');
var pokemonDB = require('pokemon');
var app = express();

var P = new Pokedex();

var pokeQuery = [];
var pokeSelect = {};


app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.get('/pokemon', function (req, res) {

  db.selectAll()
  .then(pokemon => {
  	res.json(pokemon);
  });

});

app.get('/pokelist', function(req, res) {
	res.json(pokeQuery);
});

app.post('/pokemon', function (req, res) {
	console.log(req.body.query);
	var pokemon = req.body.query;

	pokeQuery = pokemonDB.all().filter(item => (
		item.toLowerCase()[0] === pokemon[0]) && item.toLowerCase().includes(pokemon)
	).sort();
	
	res.end();
	

});

app.get('/acquire', function(req, res) {
	res.json(pokeSelect);
});

app.post('/acquire', function(req, res) {

	P.getPokemonByName(req.body.pokemon.toLowerCase())
		.then(info => {
			console.log(info);
			var pokeInfo = {
				name: req.body.pokemon,
				photo: info.sprites.front_default
			}

			pokeSelect = pokeInfo;
			res.send('/acquire');
			res.end();
		});
});

app.listen(process.env.PORT || 3001, function() {
  console.log('listening on port 3001!');
});


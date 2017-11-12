var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mongo');
var Pokedex = require('pokedex-promise-v2');
var db = require('../database-mongo/index');
var pokemonDB = require('pokemon');
var Promise = require('bluebird');
var request = require('request');

var app = express();

var P = new Pokedex();

var pokeQuery = [];
var pokeSelect = [];
var pokePick = {};

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.get('/pokemon', function (req, res) {

  res.json(pokeSelect);

});

app.get('/pokelist', function(req, res) {
	res.json(pokeQuery);
});

app.post('/pokemon', function (req, res) {
	console.log(req.body.query);
	var pokemon = req.body.query;

	pokeQuery = pokemonDB.all().filter(item => (
		item.toLowerCase()[0] === pokemon[0]) && item.toLowerCase().includes(pokemon)
	).sort().slice(0,10);

	pokeSelect = [];

	var recursion = function(arr) {
		if(arr.length === 0) {
			res.end();
		}

		if(arr[0]){
			request.get(`http://pokeapi.co/api/v2/pokemon/${arr[0].toLowerCase()}/`, (err, resp, data) => {
				if(data && !data.includes('!DOCTYPE')){
					data = JSON.parse(data);
					if(data.sprites){
						pokeSelect.push({
							name: arr[0],
							photo: data.sprites.front_default
						});	
					}
					console.log(pokeSelect[pokeSelect.length - 1]);	
					recursion(arr.slice(1));
				} else {
					console.log('SOMETHING WENT WRONG');
					res.end();
				}
					

			});
		}

	}

	recursion(pokeQuery);

});

app.get('/acquire', function(req, res) {
	res.json(pokePick);
});

app.post('/acquire', function(req, res) {
	if(req.body.pokemon === 'default') {
		pokePick = {
			name: 'Select Pokemon',
			photo: 'http://rs1344.pbsrc.com/albums/p645/Pichubytes/Pi_zpsd2dda909.png~c200'
		}
	} else {
		pokePick = pokeSelect.filter(item => item.name === req.body.pokemon)[0];
	}
	
	console.log(pokePick);

	res.end();

});

app.post('/roster', function(req, res) {
	console.log(req.body['1[profilePic]']);

	var roster = {
		1: {
			profilePic: req.body['1[profilePic]'],
			profileName: req.body['1[profileName]']
		},
		2: {
			profilePic: req.body['2[profilePic]'],
			profileName: req.body['2[profileName]']
		},
		3: {
			profilePic: req.body['3[profilePic]'],
			profileName: req.body['3[profileName]']
		},
		4: {
			profilePic: req.body['4[profilePic]'],
			profileName: req.body['4[profileName]']
		},
		5: {
			profilePic: req.body['4[profilePic]'],
			profileName: req.body['5[profileName]']
		},
		6: {
			profilePic: req.body['6[profilePic]'],
			profileName: req.body['6[profileName]']
		}
	}

	console.log(roster);

	db.save(roster);
});

app.listen(process.env.PORT || 3001, function() {
  console.log('listening on port 3001!');
});


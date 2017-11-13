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

var blankTemplate = {
    1: {
				profileName: 'None',
				profilePic: 'http://rs1344.pbsrc.com/albums/p645/Pichubytes/Pi_zpsd2dda909.png~c200'
    },
    2: {
				profileName: 'None',
				profilePic: 'http://rs1344.pbsrc.com/albums/p645/Pichubytes/Pi_zpsd2dda909.png~c200'
    },
    3: {
				profileName: 'None',
				profilePic: 'http://rs1344.pbsrc.com/albums/p645/Pichubytes/Pi_zpsd2dda909.png~c200'
    },
    4: {
				profileName: 'None',
				profilePic: 'http://rs1344.pbsrc.com/albums/p645/Pichubytes/Pi_zpsd2dda909.png~c200'
    },
    5: {
				profileName: 'None',
				profilePic: 'http://rs1344.pbsrc.com/albums/p645/Pichubytes/Pi_zpsd2dda909.png~c200'
    },
    6: {
				profileName: 'None',
				profilePic: 'http://rs1344.pbsrc.com/albums/p645/Pichubytes/Pi_zpsd2dda909.png~c200'
    }
  }






app.get('/pokemon', function (req, res) {

  res.json(pokeSelect);

});

app.get('/pokelist', function(req, res) {
	res.json(pokeQuery);
});

app.post('/pokemon', function (req, res) {
	var pokemon = req.body.query;
	var allPokemon = pokemonDB.all().filter(name => pokemonDB.getId(name) <= 721)

	pokeQuery = allPokemon.filter(item => (
		item.toLowerCase().includes(pokemon)
	)).sort();

	pokeSelect = pokeQuery.map(pokemon => ({name: pokemon}));


	res.end();

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

app.get('/roster/data', function(req,res) {
	var id = req.url.split('?')[1].split('=')[1];

	db.findById(id)
	.then(data => {
		res.json(data);
	});
});

app.get('/roster', function(req, res) {
	db.find()
	.then(data => {

		var arr = data;

		if(arr.length < 10) {
			for(var i = arr.length; i < 10; i++) {
				arr.push(blankTemplate);
			}
		}
		console.log(arr);

		console.log(data);
		res.json(data);



	});
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


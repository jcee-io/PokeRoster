var mongoose = require('mongoose');
var Promise = require('bluebird');
mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/test');
//
var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var rosterSchema = mongoose.Schema({
    1: {
      profilePic: String,
      profileName: String
    },
    2: {
      profilePic: String,
      profileName: String
    },
    3: {
      profilePic: String,
      profileName: String
    },
    4: {
      profilePic: String,
      profileName: String
    },
    5: {
      profilePic: String,
      profileName: String
    },
    6: {
      profilePic: String,
      profileName: String
    }
  });

var Roster = mongoose.model('Roster', rosterSchema);

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

var find = () => {
  return new Promise((resolve, reject) => {
    Roster.find({}, function(err, docs) {
      resolve(docs);
    });
  });
};
var save = item => {
  Roster.remove(item, function(err) {
    var pokemon = new Roster(item);

    pokemon.save();
  });


};

module.exports.selectAll = Promise.promisify(selectAll);
module.exports.save = save;
module.exports.find = find;
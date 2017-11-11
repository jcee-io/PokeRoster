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

var itemSchema = mongoose.Schema({
  name: String,
  photo: String
});

var Item = mongoose.model('Item', itemSchema);

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

var save = item => {
  Item.remove(item, function(err) {
    var pokemon = new Item(item);

    pokemon.save();
  });


};

module.exports.selectAll = Promise.promisify(selectAll);
module.exports.save = save;
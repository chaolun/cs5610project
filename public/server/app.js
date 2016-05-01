// Retrieve
var MongoClient = require('mongodb').MongoClient;

var mongoose = require('mongoose')

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/accounts", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});


mongoose.connect('mongodb://localhost:27017/accounts');

console.log(mongoose.get('accounts'));
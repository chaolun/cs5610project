var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var AccountSchema   = new Schema({
    username: String,
    password: String
});

AccountSchema.statics.findByName = function(username, callback){
  return this.find({ username:  username}, callback);
}

AccountSchema.statics.findSimilarNames = function(username, callback){
  return this.find({ username: {$regex: username, $options: "i"}}, callback);
}



module.exports = mongoose.model('Account', AccountSchema);
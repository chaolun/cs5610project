// connection variables and such
var connectionString = 'mongodb://localhost:27017/accounts';


// server.js

var express    = require('express');
var app        = express();         
var bodyParser = require('body-parser');

var mongoose   = require('mongoose');

var Account   = require('./models/account.models.server.js');


mongoose.connect(connectionString);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8081;

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();

router.use(function(req, res, next) {
    // do logging
    console.log('Request made.');
    next(); // make sure we go to the next routes and don't stop here
});


// test route to make sure everything is working
router.get('/', function(req, res) {
    res.json({ message: 'up and running!' });   
});


// finding all accounts and creating new accounts
router.route('/accounts')

    .post(function(req, res) {
        
        var account = new Account();      
        account.username = req.body.username; 
        account.password = req.body.password;
        account.save(function(err) {
          if (err)
              res.send(err);

          res.json({ message: 'Account created' });
        });
        
    })
    .get(function(req, res) {
        Account.find(function(err, accounts) {
            if (err)
                res.send(err);

            res.json(accounts);
        });
    })
    .put(function(req, res){
      Account.findByName(req.params.username, function(err, account){
        if (err)
          res.send(err);
        account.username = req.body.username;
        account.password = req.body.password;
        account.findByIdAndUpdate(req.body._id,function(err){
          if (err)
            res.send(err);

          res.json({message: 'Account updated with username ' + account.username });
        })
      });
    });


// seaching and deleting accounts by username
router.route('/accounts/:username')
  .get(function(req, res){
    Account.findSimilarNames(req.params.username, function(err, account){
      if (err)
        res.send(err);
      res.json(account);
    });
  })
  .delete(function(req, res){
    Account.remove({username: req.params.username}, function(err, account){
      if (err)
        res.send(err);
      res.json({message: 'Deleted account with username ' + req.params.username})
    });
  });

app.use('/rest', router);

app.listen(port);
console.log('Open on port ' + port);



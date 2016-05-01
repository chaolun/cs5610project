#!/bin/env node
//  OpenShift sample Node application
var express = require('express');
var app = express();

app.use(express.static(__dirname+"/public/client"));

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.get("/search", function(req, res){
  res.sendfile("./public/client/search.html");
});

app.listen(port,ipaddress);
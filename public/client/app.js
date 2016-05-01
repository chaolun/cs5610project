var app = angular.module('WardsApp', []);

app.controller("WardsAppController", wardsAppController);

function wardsAppController($scope){
  $scope.hello = 'HI EVERYBODY ADDED VIA ANGULAR';
}


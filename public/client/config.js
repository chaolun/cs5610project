(function(){
    angular
        .module("WardsApp", ['ngRoute'])
        .config(function($routeProvider){
            $routeProvider
                .when("/", {
                    templateUrl: "views/content/home.view.html",
                })
                .when("/games", {
                    templateUrl: "views/content/games.view.html"
                })
                .when("/details", {
                    templateUrl: "views/content/details.view.html"
                })
                .when('/stats', {
                    templateUrl: '/views/content/stats.view.html'
                })
                .when('/faq', {
                    templateUrl: '/views/content/faq.view.html'
                })
                .when('/about', {
                    templateUrl: '/views/content/about.view.html'
                })
                .when('/contact', {
                    templateUrl: '/views/content/contact.view.html'
                })
                .when('/contribute', {
                    templateUrl: '/views/content/contribute.view.html'
                })
                .when('/search', {
                    templateUrl: '/views/content/games.view.html'
                })
                .otherwise({
                    redirectTo: "/"
                });

        })
        .controller("WardsAppController", function($scope, $location){
           console.log("I am at: " + $location.url);
           $scope.$location = $location;
        });
})();
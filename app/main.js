var portfolio = angular.module("portfolio", ['ngAnimate', 'ngRoute']);

portfolio.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/home', {
        templateUrl: "views/home.html",
        controller: "homeController"
    })
    .when('/tools', {
        templateUrl: "views/tools.html",
        controller: "ToolsController"
    })
    .otherwise({
        redirectTo: "/home"
    });
}]);

portfolio.controller("homeController", ["$scope", "$http", function($scope, $http){
    $scope.title = 'Home';

    $http.get("data/home_cards.json").then(function(response){
        $scope.cards = response.data;
    });
}]);

portfolio.controller("ToolsController", ["$scope", "$http", function($scope, $http){
    $scope.title = "Tools";

    $http.get("data/tools_cards.json").then(function(response){
        $scope.tools = response.data;
    });
    
}]);





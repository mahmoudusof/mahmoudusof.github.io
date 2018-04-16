var portfolio = angular.module("portfolio", ['ngAnimate', 'ngRoute']);

portfolio.config(['$routeProvider', "$locationProvider", function($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true);

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


document.addEventListener("scroll", function(){
    var content = document.getElementById("content");
    var win_y = window.scrollY;
    var win_h = window.innerHeight;
    content.style.top = String((win_y/4) + ((win_h / 2) - 100)) + "px";
});




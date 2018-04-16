var portfolio = angular.module("portfolio", ['ngAnimate', 'ngRoute']);

portfolio.config(['$routeProvider', "$locationProvider", function($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $routeProvider
    .when('/', {
        templateUrl: "views/home.html",
        controller: "homeController",
    })
    .when('/tools', {
        templateUrl: "views/tools.html",
        controller: "ToolsController"
    })
    .otherwise({
        redirectTo: "/"
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
    var back = document.getElementById("back");
    var win_y = window.scrollY;
    var win_h = window.innerHeight;
    var content = document.getElementById("content");

    back.style.backgroundPositionY = String(win_y/5) + "px";

    content.style.top = String((win_y/3) + ((win_h / 2) - 100)) + "px";
});
document.addEventListener("load", function(){

});

// document.addEventListener("load", function(){
//     var content = document.getElementById("content");
//     content.style.display = "block";
//     console.log("loaded");
// });

$(document).ready(function(){
    var content = $("#content");
    content.show();
    
});

function dis(clicked){
    var items = document.getElementsByClassName("nav-link");
    
    for (var i=0; i<items.length; i++){
        items[i].className = "nav-link";
    }

    clicked.className = "nav-link active";
    console.log("dis");
}
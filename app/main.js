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
    window.scrollTo(0, window.innerHeight-100);
}


function come(to, element, side){
    if (window.scrollY > window.innerHeight*to){
        element.style.opacity = 1;
        element.style.transform = "translateX(0px)";
    }else{
        element.style.opacity = 0;
        element.style.transform = "translateX(" + String(side*10) + "%)";
    }
}

document.addEventListener("scroll", function(){
    var about = document.getElementById("about-content");
    var home = document.getElementsByClassName("cardo");
    var bio = document.getElementById("bio");

    come(0.6, about, 1);
    come(1.8, bio, 1);

    for (var i=0; i<home.length; i++){
        come(1.2, home[i], -1);
    }

    var back = document.getElementById("back");
    var win_y = window.scrollY;
    var win_h = window.innerHeight;
    var content = document.getElementById("content");

    back.style.backgroundPositionY = String(win_y/5) + "px";

    content.style.top = String((win_y/3) + ((win_h / 2) - 100)) + "px";
});

// 0.5(img_width - innerWidth)

// img_width = innerHeight * 1.8


var portfolio = angular.module("portfolio", ['ngAnimate', 'ngRoute']);

portfolio.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/home', {
        templateUrl: "views/home.html",
        controller: "homeController"
    })
    .when('/tools', {
        templateUrl: "views/tools.html"
    })
    .otherwise({
        redirectTo: "/home"
    });
}]);

portfolio.controller("homeController", ["$scope", function($scope){
    $scope.title = 'Home';

    $scope.cards = [
        {
            img: "img/responsive2.jpg",
            title: "Responsive",
            shown: true,
            text: "We make our apps look awesome on all devices like PCs, laptops, tablets and mobile phones. The website will look different but will always stay AWESOME."
        },
        {
            img: "img/dynamic2.png",
            title: "Dynamic",
            shown: true,
            text: "Build your forum/blog now or even make a small facebook for your university campus. Make a registration system and a login system and allow your users to make posts on your app."
        },
        {
            img: "img/interactive2.png",
            title: "Interactive",
            shown: true,
            text: "Your website should not be clicked and scrolled through and sit there with no replys. We offer you interactive pages that jump arround with your users activities and give them a pleasing experience."
        }
    ]
}]);





var portfolio = angular.module("portfolio", ['ngAnimate', 'ngRoute']);

portfolio.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/home', {
        templateUrl: "views/home.html",
        controller: "homeController"
    })
    .when('/tools', {
        templateUrl: "views/tools.html",
        controller: "ToolsCotroller"
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
            text: "We make our apps look awesome on all devices like PCs, laptops, tablets and mobile phones. The website will look different but will always stay AWESOME."
        },
        {
            img: "img/dynamic2.png",
            title: "Dynamic",
            text: "Build your forum/blog now or even make a small facebook for your university campus. Make a registration system and a login system and allow your users to make posts on your app."
        },
        {
            img: "img/interactive2.png",
            title: "Interactive",
            text: "Your website should not be clicked and scrolled through and sit there with no replys. We offer you interactive pages that jump arround with your users activities and give them a pleasing experience."
        }
    ]
}]);

portfolio.controller("ToolsCotroller", ["$scope", function($scope){
    $scope.title = "Tools";

    $scope.tools = [
        {
            class: "card border-dark mb-3",
            img: "img/html5-css3.png",
            alt: "Web Design",
            title: "HTML5 & CSS3",
            text: "We use the latest HTML5 elements and attributes and CSS3 properties to make your website look as awesome as you are and let it shake its booty."
        },
        {
            class: "card border-danger mb-3",
            img: "img/angular.png",
            alt: "Angular.js",
            title: ">Angular",
            text: "We use Angular for making single page applications that are super fast and interactive with the users."
        },
        {
            class: "card border-primary mb-3",
            img: "img/bootstrap.png",
            alt: "Bootstrap",
            title: "Bootstrap",
            text: "Bootstrap is an awesome css framework that we use to take the beauty of your page to the next level and make your website look awsome on any device."
        },
        {
            class: "card border-info mb-3",
            img: "img/django-logo-positive.png",
            alt: "Django",
            title: "Python Django",
            text: "Django is a frame work made for python to make dynamic web apps...  now you car make your e-commerce website with us or you can even make your own social network for your university campus, or maybe make a blog where friends can like your posts and make comments...  take your imagination to the next level."
        },
        {
            class: "card border-warning mb-3",
            img: "img/laravel-framework-logo.png",
            alt: "Laravel",
            title: "PHP Laravel",
            text: "Laravel is an MVC based framework for PHP web applications. Now you can make super quick dynamic applications without having to worry about speed nor security."
        }
    ]
}]);





var app = angular.module('app', ['ngMaterial', 'ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.htm"
    })
    .when("/red", {
        templateUrl : "pages/red.html"
    })
    .when("/green", {
        templateUrl : "pages/green.html"
    })
    .when("/blue", {
        templateUrl : "pages/blue.html"
    });
});
app.controller('global', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});

  var app = angular.module('shopping', ['ngRoute'])
  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    })
    .when('/show', {
      templateUrl: 'views/show.html',
      controller: 'ShowCtrl'
    })
    .otherwise({redirectTo: '/'});
  }])

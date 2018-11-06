var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'home.html',
    controller  : 'HomeController'
  })

  .when('/book', {
    templateUrl : 'book.html',
    controller  : 'BookController'
  })

  .when('/sails', {
    templateUrl : 'sails.html',
    controller  : 'SailsController'
  })

  .when('/contact', {
    templateUrl : 'contact.html',
    controller  : 'ContactController'
  })

  .otherwise({redirectTo: '/'});
});

app.controller('HomeController', function($scope) {
  $scope.message = 'Hello from HomeController';
});

app.controller('BookController', function($scope) {
  $scope.message = 'Hello from BookController';
});

app.controller('SailsController', function($scope) {
  $scope.message = 'Hello from SailsController';
});

app.controller('ContactController', function($scope) {
  $scope.message = 'Hello from ContactController';
});
angular.module('App')
  .config(
    ['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/', {
        templateUrl: '../src/home/home.html',
        controller: 'ctrl'
      })
      .when('/view1',{
        templateUrl: '../src/home/home.html',
        controller: 'ctrl'
      })
    }])
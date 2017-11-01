// angular.module('myApp').
// config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
//     $routeProvider.when({
//         redirectTo: '/view1'
//     });
// }]);


angular.module('myApp')
.config(
  ['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '../src/view1/view1.html',
          action: 'myApp.view1.View1Ctrl'
        })}])
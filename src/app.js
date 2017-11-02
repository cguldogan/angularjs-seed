var angular = require('angular');
require('angular-route');
require('./view1/view1');


// http://clintberry.com/2013/modular-angularjs-application-design/

// Define all your modules with no dependencies
// angular.module('UserRegistrationApp', []);
// angular.module('UserManagementApp', []);

// Lastly, define your "main" module and inject all other modules as dependencies
// angular.module('MainApp',
// [
//   'UserRegistrationApp',
//   'UserManagementApp'
// ]
// );

angular.module('myApp', [
  'ngRoute',
  'myApp.view1'
]);


require('./routes');
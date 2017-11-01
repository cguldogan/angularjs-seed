var angular = require('angular');
require('angular-route');
require('./view1/view1');


// http://clintberry.com/2013/modular-angularjs-application-design/

// Define all your modules with no dependencies
// angular.module('BirthdayApp', []);
// angular.module('CollectionApp', []);
// angular.module('DashboardApp', []);
// angular.module('LoginApp', []);
// angular.module('MessageApp', []);
// angular.module('PatientApp', []);
// angular.module('PhoneApp', []);
// angular.module('ReportsApp', []);


// Lastly, define your "main" module and inject all other modules as dependencies
// angular.module('MainApp',
// [
//   'BirthdayApp',
//   'CollectionApp',
//   'DashboardApp',
//   'LoginApp',
//   'MessageApp',
//   'PatientApp',
//   'PhoneApp',
//   'ReportsApp',
//   'templates-main',
// ]
// );

angular.module('myApp', [
  'ngRoute',
  'myApp.view1'
]);


require('./routes');
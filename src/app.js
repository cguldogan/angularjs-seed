'use strict';

var angular = require('angular');
var route = require('angular-route');

//Loader
require('./home/module');


var app = angular.module('App', [
  'ngRoute',
  'home'
]);

require('./routes');

module.exports = app;

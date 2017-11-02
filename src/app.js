'use strict';

var angular = require('angular');
var route = require('angular-route');

//Loader
require('./home/home');

var app = angular.module('App', [
  'ngRoute',
  'home'
]);

require('./routes');
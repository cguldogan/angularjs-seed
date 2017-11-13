'use strict';

var angular = require('angular');
var route = require('angular-route');
var bootstrap = require('bootstrap');
var tether = require('tether');
var css = require('bootstrap/dist/css/bootstrap.min.css');

//Loader
require('./home/module');


var app = angular.module('App', [
  'ngRoute',
  'home'
]);

require('./routes');

module.exports = app;

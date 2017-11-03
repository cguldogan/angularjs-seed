'use strict';
var homeController  = require('./controller');

var homeModule = angular.module('home',[])
.controller('homeController',['$scope',homeController]);

module.exports = homeModule;
'use strict';
var homeFactory     = require('./factory');
var homeController  = require('./controller');

var homeModule = angular.module('home',[])
                            .factory('homeFactory',homeFactory)
                            .controller('homeController',homeController);

module.exports = homeModule;
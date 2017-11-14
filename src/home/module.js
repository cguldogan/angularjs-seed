'use strict';
var homeFactory     = require('./factory');         //load factory
var homeController  = require('./controller');      //load factory

var homeModule = angular.module('home',[])
                            .factory('homeFactory',homeFactory)
                            .controller('homeController',homeController); // dependencies will injected with $inject=[]

module.exports = homeModule;
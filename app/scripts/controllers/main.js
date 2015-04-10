'use strict';

/**
 * @ngdoc function
 * @name coffeeTimeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the coffeeTimeApp
 */
angular.module('coffeeTimeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

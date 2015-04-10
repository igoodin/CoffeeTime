'use strict';

/**
 * @ngdoc function
 * @name coffeeTimeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the coffeeTimeApp
 */
angular.module('coffeeTimeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

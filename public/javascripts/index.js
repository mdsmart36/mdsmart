(function(){
  'use strict';

  angular.module('portfolio', [])
    .controller('MainController', ['$scope', function($scope){
      $scope.something = 'portfolio app';
    }]);
})();
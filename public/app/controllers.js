var controllers = angular.module('portfolio.controllers', []);

controllers.controller('indexController', ['$scope', function($scope){
  $scope.message = "Home Page";
}]);

controllers.controller('navController', ['$scope', function($scope){
  $scope.navItems = [ 
    {name:'Home', route: '/'},
    {name:'About', route: '/about'},
    {name:'Projects', route: '/projects'},
    {name:'My Stack', route: '/tech'},
    {name:'Contact', route: '/contact'},
    {name:'Github', route: 'http://github.com/mdsmart36'},
    {name:'Resume', route: '#'}
    ];
}])

controllers.controller('aboutController', ['$scope', function($scope){
  $scope.message = "About Page";
}]);

controllers.controller('projectsController', ['$scope', function($scope){
  $scope.message = "Projects Page";
}]);

controllers.controller('techController', ['$scope', function($scope){
  $scope.message = "Tech Page";
}]);

controllers.controller('contactController', ['$scope', function($scope){
  $scope.message = "Contact Page";
}]);


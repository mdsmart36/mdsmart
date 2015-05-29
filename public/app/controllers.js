var controllers = angular.module('portfolio.controllers', []);

controllers.controller('indexController', ['$scope', function($scope){
  $scope.message = "Home Page";
}]);

controllers.controller('navController', ['$scope', function($scope){
  $scope.navItems = [ 
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
  $scope.message = "This doesn't get printed";
  $scope.myStack = [
    {imgSource: 'html5.png', name: 'HTML5'},
    {imgSource: 'css3.png', name: 'CSS3'},
    {imgSource: 'JavaScript-logo.png', name: 'Javascript'},
    {imgSource: 'jquery_logo.png', name: 'jQuery'},
    {imgSource: 'bootstrap-logo.png', name: 'Bootstrap'},
    {imgSource: 'firebase_logo.png', name: 'Firebase'},
    {imgSource: 'github-logo-transparent.png', name: 'Github'},
    {imgSource: 'visualstudio.png', name: 'Visual Studio'},
    {imgSource: 'ubuntu-logo14.png', name: 'Ubuntu'},
    {imgSource: 'nodejs.svg', name: 'Node'},
    {imgSource: 'express.png', name: 'Express'},
    {imgSource: 'mongodb-logo-rgb.jpeg', name: 'MongoDB'}
  ];
}]);

controllers.controller('contactController', ['$scope', function($scope){
  $scope.message = "Contact Page";
}]);


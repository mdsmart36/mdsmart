var app = angular.module('portfolio', ['ngRoute', 'portfolio.controllers']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {templateUrl: 'partials/index', controller: 'indexController'})
    .when('/about', {templateUrl: 'partials/about', controller: 'aboutController'})
    .when('/projects', {templateUrl: 'partials/projects', controller: 'projectsController'})
    .when('/tech', {templateUrl: 'partials/tech', controller: 'techController'})
    .when('/contact', {templateUrl: 'partials/contact', controller: 'contactController'})
    .otherwise({redirectTo:'/'})
}])

.config(['$locationProvider', function($locationProvider) {
  $locationProvider.html5Mode(true);
}]);
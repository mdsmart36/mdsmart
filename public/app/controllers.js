var controllers = angular.module('portfolio.controllers', []);

controllers.controller('indexController', ['$scope', function($scope){
  
}]);

controllers.controller('navController', ['$scope', function($scope){
  $scope.navItems = [ 
    {name:'About', route: '/about'},
    {name:'Projects', route: '/projects'},
    {name:'My Stack', route: '/tech'},
    {name:'Contact', route: '/contact'},
    {name:'Github', route: 'http://github.com/mdsmart36'},
    {name:'Resume', route: '/resume'}
    ];
}])

controllers.controller('aboutController', ['$scope', function($scope){
  
}]);

controllers.controller('projectsController', ['$scope', function($scope){
  $scope.myProjects = [
    {codeURL: 'http://mdsmart36.github.io', title: 'Simple Portfolio', description: 'A simple portfolio web site using HTML, CSS, JavaScript, jQuery, and Bootstrap'},
    {codeURL: 'http://track-coach.firebaseapp.com', title: 'Track Coach (capstone project)', description: 'An app using Angular, Firebase, Bootstrap, designed for high school track coaches to help manage their team.'},
    {codeURL: 'http://shielded-fortress-2882.herokuapp.com/', title: 'BookKeeper', description: 'An app using Node.js, Express, MongoDB, Embedded Javascript, Bootstrap, and Heroku for deployment. Use username \'demo\' and password \'1234\' to try it out.' },
    {codeURL: 'http://mdsmart36.github.io/projects/weather/index.html', title: 'Weather API', description: 'A page illustrating a basic Ajax API call to Weather Underground and using geolocation information to pre-populate a data field with the user\'s zip code.'},
    {codeURL: 'http://mdsmart36.github.io/projects/savings/index.html', title: 'Savings Multiplied Part 1', description: 'A mock website using Bootstrap as the layout framework, and jQuery API calls to Firebase to populate the auction page.'}
  ];
}]);

controllers.controller('techController', ['$scope', function($scope){
  $scope.myStack = [
    {imgSource: 'html5.png', name: 'HTML5', description: 'HTML is a markup language that provides the semantic structure to a web page, giving it meaning and relationship.'},
    {imgSource: 'css3.png', name: 'CSS3', description: 'CSS, or Cascading Style Sheets, provides the styling (color, position, font, padding, etc.) to your page\'s elements.'},
    {imgSource: 'JavaScript-logo.png', name: 'Javascript', description: 'Javascript is the language of the web browser, allowing you to programmatically change your page data and provide user interactivity.'},
    {imgSource: 'jquery_logo.png', name: 'jQuery', description: 'jQuery is a Javascript library allowing easier page manipulation.'},
    {imgSource: 'bootstrap-logo.png', name: 'Bootstrap', description: 'Bootstrap is a front-end responsive framework providing tools for quickly developing mobile-ready, responsive, and consistent looking pages.'},
    {imgSource: 'AngularJS-Shield-small.png', name: 'Angular', description: 'An open-source, Javascript-based web application framework using the Model-View-Controller architechture which extends the functionality of HTML.'},
    {imgSource: 'firebase_logo.png', name: 'Firebase', description: 'A NoSQL database service allowing documents to be sored in the popular JSON format.'},
    {imgSource: 'github-logo-transparent.png', name: 'Github', description: 'An online repository for your source code, allowing you to share, collaborate, and manage with ease.'},
    {imgSource: 'visualstudio.png', name: 'Visual Studio', description: 'A full-featured development environment for building Microsoft-based products.'},
    {imgSource: 'ubuntu-logo14.png', name: 'Ubuntu', description: 'An open-source operating system based on Linux which makes developing and deploying apps much easier!'},
    {imgSource: 'nodejs.svg', name: 'Node', description: 'A technology which allows Javascript to be utilized more robustly outside the web browser.'},
    {imgSource: 'express.png', name: 'Express', description: 'A web framework for use with Node.js'},
    {imgSource: 'mongodb-logo-rgb.jpeg', name: 'MongoDB', description: 'An open-source document database, and the leading NoSQL database.'}
  ];

  $scope.showDescription = -1;

  $scope.showDiv = function(index) {
    $scope.showDescription = index;
  };

  $scope.hideDiv = function() {
    $scope.showDescription = -1;
  }
}]);

controllers.controller('contactController', ['$scope', function($scope){
  $scope.contactMethods = [
    {contactURL: 'https://www.facebook.com/mdsmart', logo: 'FB-f-Logo__blue_144.png', title: 'Facebook'},
    {contactURL: 'https://www.twitter.com/mdsmart', logo: 'Twitter_logo_blue.png', title: 'Twitter'},
    {contactURL: 'https://www.linkedin.com/in/matthewdsmart/en', logo: 'Logo-2C-128px-TM.png', title: 'LinkedIn'}
  ];

}]);

controllers.controller('resumeController', ['$scope', function($scope){
  $scope.resumeFile = 'Matthew Smart - resume.pdf';
}]);
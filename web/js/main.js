/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/login.html", controller: "LoginCtrl"})
    .when("/admin-home", {templateUrl: "partials/admin-home.html", controller: "AdminCtrl"})
    .when("/staff-home", {templateUrl: "partials/staff-home.html", controller: "staffCtrl"})
    // // Pages
    // .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    // .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
    // .when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
    // .when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
    // .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    // // Blog
    // .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    // .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
    // // else 404
    // .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function ($scope, $location, $http) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls admin pages
 */
app.controller('AdminCtrl', function ($scope, $location, $http) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});

/* Config login using local storage */



app.controller('LoginCtrl', function ($scope, $location, $http) {
  console.log("Login Controller reporting for duty.");

  $scope.userDB = [{
    "id": 1,
    "first_name": "jooyong",
    "last_name": "jeong",
    "username": "jooyongjeong",
    "identification_number": 123,
    "mobile_number": "0412345678",
    "staff_type": "admin",
    "password": "test"
  },
  {
    "id": 2,
    "first_name": "jessica",
    "last_name": "jeong",
    "username": "jessicajeong",
    "identification_number": 123,
    "mobile_number": "0412345678",
    "staff_type": "regularStaff",
    "password": "test"
  }];

  $scope.testLogin = function(){
    var success = false;
    var staff_type = "";
    angular.forEach($scope.userDB, function(value, key) {
      if($scope.username == value.username && $scope.password == value.password){
        success = true;
        staff_type = value.staff_type;
      }
    });

    if(success){
      if (staff_type == "admin") {
        $location.path('/admin-home')
      }
      else {
        $location.path('/staff-home')
      }
    }else {
      console.log("failed");
    }
  }

});

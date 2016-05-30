/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', [
  'ngRoute',
  'ngTouch',
  'ui.grid', 
  'ui.grid.edit', 
  'ui.grid.rowEdit', 
  'ui.grid.cellNav'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // pages for all users
    .when("/", {templateUrl: "partials/login.html", controller: "LoginCtrl"})    
    // .when("/my-account", {templateUrl: "partials/my-account.html", controller: "PageCtrl"})
    // Pages for admin    
    .when("/admin-home/edit-today", {templateUrl: "partials/admin-home-edit.html", controller: "AdminCtrl"})
    .when("/admin-home/view-today", {templateUrl: "partials/admin-home-view.html", controller: "AdminCtrl"})
    .when("/admin/summary", {templateUrl: "partials/admin-summary.html", controller: "AdminCtrl"})
    // .when("/invoice-generator", {templateUrl: "partials/invoice-generator.html", controller: "AdminCtrl"})
    // .when("/manage-staff", {templateUrl: "partials/manage-staff.html", controller: "AdminCtrl"})
    // .when("/manage-order", {templateUrl: "partials/manage-order.html", controller: "AdminCtrl"})
    // .when("/manage-client", {templateUrl: "partials/manage-client.html", controller: "AdminCtrl"})
    // .when("/manage-building", {templateUrl: "partials/manage-building.html", controller: "AdminCtrl"})
    // .when("/manage-menu-item", {templateUrl: "partials/manage-menu-item.html", controller: "AdminCtrl"})
    // // pages for staff    
    // .when("/staff-home", {templateUrl: "partials/staff-home.html", controller: "staffCtrl"})
    // // else 404
    // .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the staff pages
 */
app.controller('StaffCtrl', function ($scope, $location, $http) {
  console.log("Staff Controller reporting for duty.");
});

/**
 * Controls the admin pages
 */
app.controller('AdminCtrl', function ($scope, $location, $http) {
  console.log("Admin Controller reporting for duty.");

  // HOME ADMIN PAGES
  $scope.homeAdminData1 = [{
    "id": 1,
    "menu_item": "muffin",
    "quantity_made": 20
  },
  {
    "id": 2,
    "menu_item": "donut",
    "quantity_made": 10
  }];

  $scope.homeAdminData2 = [{
    "id": 1,
    "menu_item": "muffin",
    "quantity_left": 20,
    "paid_cash": 2,
    "paid_eftpost": 3,
    "put_on_tab": 4,
    "income_earned": "$10"
  },
  {
    "id": 2,
    "menu_item": "donut",
    "quantity_left": 10,
    "paid_cash": 2,
    "paid_eftpost": 3,
    "put_on_tab": 4,
    "income_earned": "$10"
  },
  {
    "id": 3,
    "menu_item": "sandwich",
    "quantity_left": 15,
    "paid_cash": 2,
    "paid_eftpost": 3,
    "put_on_tab": 4,
    "income_earned": "$10"
  },
  {
    "id": 4,
    "menu_item": "chicken pie",
    "quantity_left": 10,
    "paid_cash": 2,
    "paid_eftpost": 3,
    "put_on_tab": 4,
    "income_earned": "$10"
  },
  {
    "id": 5,
    "menu_item": "mushroom pasta",
    "quantity_left": 10,
    "paid_cash": 2,
    "paid_eftpost": 3,
    "put_on_tab": 4,
    "income_earned": "$10"
  }];

  $scope.addData = function() {
    var n = $scope.homeAdminData.length + 1;
    $scope.homeAdminData.push({
      "id": n,
      "menu_item": "",
      "quantity_made": 0
    });
  };

  $scope.goToViewMode = function() {
    $location.path('/admin-home/view-today');
  };

  $scope.getSummary = function() {
    $location.path('/admin/summary').search({duration: 'today'});
  };

  // SUMMARY PAGES
  $scope.durationOptions = ["Today", "This Week", "This Month", "This Year", "This Financial Year"];

  $scope.summaryTodayData = [{
    "id": 1,
    "menu_item": "muffin",
    "quantity_made": 20
  },
  {
    "id": 2,
    "menu_item": "donut",
    "quantity_made": 10
  }];

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
    "staff_type": "employee",
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
        $location.path('/admin-home/edit-today')
      }
      else {
        $location.path('/staff-home')
      }
    }else {
      console.log("failed");
    }
  }

});

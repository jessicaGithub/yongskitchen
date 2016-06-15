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
    // .when("/admin/invoice-generator", {templateUrl: "partials/admin-invoice-generator.html", controller: "AdminCtrl"})
    .when("/admin/manage-staff", {templateUrl: "partials/admin-manage-staff.html", controller: "AdminCtrl"})
    .when("/admin/manage-order", {templateUrl: "partials/admin-manage-order.html", controller: "AdminCtrl"})
    .when("/admin/manage-client", {templateUrl: "partials/admin-manage-client.html", controller: "AdminCtrl"})
    .when("/admin/manage-building", {templateUrl: "partials/admin-manage-building.html", controller: "AdminCtrl"})
    .when("/admin/manage-menu-item", {templateUrl: "partials/admin-manage-menu-item.html", controller: "AdminCtrl"})
    // pages for staff    
    .when("/staff-home", {templateUrl: "partials/staff-home.html", controller: "StaffCtrl"})
    .when("/staff/add-order", {templateUrl: "partials/staff-add-order.html", controller: "StaffCtrl"})
    // // else 404
    // .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the staff pages
 */
app.controller('StaffCtrl', function ($scope, $location, $http) {
  console.log("Staff Controller reporting for duty.");

  $scope.buildings = ["Building A", "Building B", "Building C", "Building D", "Building E"];
  $scope.selectedBuilding = "Building A";

  $scope.clientList = [{
    "id": 1,
    "first_name": "Joe",
    "last_name": "Horton",
    "level": 20,
    "mobile_number": "0437292987",
    "action": "update details | add order "
  },
  {
    "id": 2,
    "first_name": "Maggie",
    "last_name": "Smith",
    "level": 2,
    "mobile_number": "0422991717",
    "action": "update details | add order "
  },
  {
    "id": 3,
    "first_name": "Troll",
    "last_name": "Man",
    "level": 5,
    "mobile_number": "0434577575",
    "action": "update details | add order "
  }];

  // staff order page tab fix
  $('.nav-tabs a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
  });

  $scope.breakfastList = [{
    "id": 1,
    "name": "muffin",
    "price": 4,
    "quantity_left": 5
  },
  {
    "id": 2,
    "name": "brownies",
    "price": 4,
    "quantity_left": 10
  },{
    "id": 3,
    "name": "pie",
    "price": 5,
    "quantity_left": 5
  }];
});

/**
 * Controls the admin pages
 */
app.controller('AdminCtrl', function ($scope, $location, $http) {
  console.log("Admin Controller reporting for duty.");

  // HOME ADMIN PAGES

  $http.get('../Dummy_Data/today_menu.csv').success(function(data) {
     $scope.homeAdminData = csvJSON(data);

     $scope.homeAdminData1gridOptions.data = $scope.homeAdminData;
     $scope.homeAdminData2gridOptions.data = $scope.homeAdminData;
  });

  // data for admin home edit page
  $scope.homeAdminData1Columns = [{ 
    field: 'MenuItem_Name', 
    displayName: "Menu Item" 
  }, 
  { 
    field: 'MenuItem_QuantityMade', 
    displayName: "Quantity Made" 
  }];
  $scope.homeAdminData1gridOptions = {
    enableSorting: true,
    columnDefs: $scope.homeAdminData1Columns,
    onRegisterApi: function(gridApi) {
      $scope.gridApi = gridApi;
    }
  };

  // data for admin home view page
  $scope.homeAdminData2Columns = [{ 
    field: 'MenuItem_Name', 
    displayName: "Menu Item" 
  }, 
  { 
    field: 'MenuItem_QuantityMade', 
    displayName: "Quantity Made" 
  }, 
  { 
    field: 'MenuItem_QuantityLeft', 
    displayName: "Quantity Left" 
  }];

  $scope.homeAdminData2gridOptions = {
    enableSorting: true,
    columnDefs: $scope.homeAdminData2Columns,
    onRegisterApi: function(gridApi) {
      $scope.gridApi = gridApi;
    }
  };

  $scope.addData = function() {
    alert("added a blank editable row on the bottom of the list");
    var n = $scope.homeAdminData.length + 1;
    $scope.homeAdminData.push({
      Today_Date: "15/07/16", 
      MenuItem_ID: "", 
      MenuItem_Name: "", 
      MenuItem_Price: "", 
      MenuItem_QuantityMade: ""
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
  $scope.selectedDuration = "Today";

  $http.get('../Dummy_Data/orders.csv').success(function(data) {
     $scope.summaryTodayData = csvJSON(data);

     $scope.summaryTodayGridOptions.data = $scope.summaryTodayData;
  });

  // data for admin home edit page
  $scope.summaryTodayColumns = [{ 
    field: 'Order_ID', 
    // displayName: "Menu Item" 
  }, 
  { 
    field: 'Client_ID', 
    // displayName: "Quantity Made" 
  }, 
  { 
    field: 'Staff_ID', 
    // displayName: "Quantity Made" 
  }, 
  { 
    field: 'Menu_Ordered', 
    // displayName: "Quantity Made" 
  }, 
  { 
    field: 'Total_Due', 
    // displayName: "Quantity Made" 
  }, 
  { 
    field: 'Payment_Method', 
    // displayName: "Quantity Made" 
  }];
  
  $scope.summaryTodayGridOptions = {
    enableSorting: true,
    columnDefs: $scope.summaryTodayColumns,
    onRegisterApi: function(gridApi) {
      $scope.gridApi = gridApi;
    }
  };
});

/* Config login using local storage */

app.controller('LoginCtrl', function ($scope, $location, $http) {
  console.log("Login Controller reporting for duty.");

  $http.get('../Dummy_Data/staffs.csv').success(function(data) {
     $scope.userDB = csvJSON(data);
  });

  $scope.testLogin = function(){
    var success = false;
    var staff_type = "";

    angular.forEach($scope.userDB, function(value, key) {
      if($scope.username == value.Staff_Username && $scope.password == value.Staff_Password){
        success = true;
        staff_type = value.Staff_Type;
      }
    });

    if(success){
      if (staff_type == "Admin") {
        $location.path('/admin-home/edit-today')
      }
      else {
        $location.path('/staff-home')
      }
    }else {
      alert("login failed. check your credentials");
    }
  }

});

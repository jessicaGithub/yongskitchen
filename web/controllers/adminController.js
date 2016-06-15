app.controller('AdminHomeCtrl', function ($scope, $location, $http) {
  console.log("Admin Home Controller reporting for duty.");

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

});

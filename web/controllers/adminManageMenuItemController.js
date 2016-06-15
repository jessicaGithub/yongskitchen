app.controller('AdminManageMenuItemCtrl', function ($scope, $location, $http) {
  console.log("Admin Manage Menu Item Controller reporting for duty.");

  $scope.durationOptions = ["Today", "This Week", "This Month", "This Year", "This Financial Year"];
  $scope.selectedDuration = "Today";

  $http.get('../Dummy_Data/Menu_items.csv').success(function(data) {
     $scope.MenuItemData = csvJSON(data);

     $scope.MenuItemGridOptions.data = $scope.MenuItemData;
  });

  $scope.MenuItemColumns = [{ 
    field: 'MenuItem_ID', 
    displayName: "ID"
  }, 
  { 
    field: 'MenuItem_Name', 
    displayName: "Name"
  }, 
  { 
    field: 'MenuItem_Price', 
    displayName: "Price"
  }, 
  { 
    field: 'MenuItem_Category', 
    displayName: "Category"
  }, 
  { 
    field: 'MenuItem_QuantityMadeTotal', 
    displayName: "QuantityMadeTotal"
  }, 
  { 
    field: 'MenuItem_QuantitySoldTotal', 
    displayName: "QuantitySoldTotal"
  }, 
  { 
    field: 'MenuItem_CreationDate', 
    displayName: "CreationDate"
  }];
  
  $scope.MenuItemGridOptions = {
    enableSorting: true,
    columnDefs: $scope.MenuItemColumns,
    onRegisterApi: function(gridApi) {
      $scope.gridApi = gridApi;
    }
  };
});

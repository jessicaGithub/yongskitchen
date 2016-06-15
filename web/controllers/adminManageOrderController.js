app.controller('AdminManageOrderCtrl', function ($scope, $location, $http) {
  console.log("Admin Manage Order Controller reporting for duty.");

  $scope.durationOptions = ["Today", "This Week", "This Month", "This Year", "This Financial Year"];
  $scope.selectedDuration = "Today";

  $http.get('../Dummy_Data/Orders.csv').success(function(data) {
     $scope.OrderData = csvJSON(data);

     $scope.OrderGridOptions.data = $scope.OrderData;
  });

  $scope.OrderColumns = [{ 
    field: 'Order_ID', 
    // displayName: ""
  }, 
  { 
    field: 'Client_ID', 
    // displayName: ""
  }, 
  { 
    field: 'Staff_ID', 
    // displayName: ""
  }, 
  { 
    field: 'Menu_Ordered', 
    // displayName: ""
  }, 
  { 
    field: 'Total_Due', 
    // displayName: ""
  }, 
  { 
    field: 'Amount_Paid', 
    // displayName: ""
  }, 
  { 
    field: 'Tab_Balance', 
    // displayName: ""
  }, 
  { 
    field: 'Payment_Method', 
    // displayName: ""
  }, 
  { 
    field: 'Purchase_Date', 
    // displayName: ""
  }];
  
  $scope.OrderGridOptions = {
    enableSorting: true,
    columnDefs: $scope.OrderColumns,
    onRegisterApi: function(gridApi) {
      $scope.gridApi = gridApi;
    }
  };
});

app.controller('AdminSummaryCtrl', function ($scope, $location, $http) {
  console.log("Admin Summary Controller reporting for duty.");

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
    field: 'Amount_Paid', 
    // displayName: "Quantity Made" 
  }, 
  { 
    field: 'Tab_Balance', 
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

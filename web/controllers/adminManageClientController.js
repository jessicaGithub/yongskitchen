app.controller('AdminManageClientCtrl', function ($scope, $location, $http) {
  console.log("Admin Manage Client Controller reporting for duty.");

  $scope.durationOptions = ["Today", "This Week", "This Month", "This Year", "This Financial Year"];
  $scope.selectedDuration = "Today";

  $http.get('../Dummy_Data/clients.csv').success(function(data) {
     $scope.ClientData = csvJSON(data);

     $scope.ClientGridOptions.data = $scope.ClientData;
  });

  $scope.ClientColumns = [{ 
    field: 'Client_ID', 
    displayName: "ID"
  }, 
  { 
    field: 'Client_FirstName', 
    displayName: "First Name"
  }, 
  { 
    field: 'Client_LastName', 
    displayName: "Last Name"
  }, 
  { 
    field: 'Client_Building', 
    displayName: "Building"
  }, 
  { 
    field: 'Client_BuildingLevel', 
    displayName: "Level"
  }, 
  { 
    field: 'Client_Mobile', 
    displayName: "Mobile"
  }];
  
  $scope.ClientGridOptions = {
    enableSorting: true,
    columnDefs: $scope.ClientColumns,
    onRegisterApi: function(gridApi) {
      $scope.gridApi = gridApi;
    }
  };
});

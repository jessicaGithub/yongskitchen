app.controller('AdminManageBuildingCtrl', function ($scope, $location, $http) {
  console.log("Admin Manage Building Controller reporting for duty.");

  $scope.durationOptions = ["Today", "This Week", "This Month", "This Year", "This Financial Year"];
  $scope.selectedDuration = "Today";

  $http.get('../Dummy_Data/buildings.csv').success(function(data) {
     $scope.BuildingData = csvJSON(data);

     $scope.BuildingGridOptions.data = $scope.BuildingData;
  });

  $scope.BuildingColumns = [{ 
    field: 'Building_ID', 
    displayName: "ID"
  }, 
  { 
    field: 'Building_Address', 
    displayName: "Address"
  }, 
  { 
    field: 'Building_Suburb', 
    displayName: "Suburb"
  }, 
  { 
    field: 'Building_Postcode', 
    displayName: "Postcode"
  }, 
  { 
    field: 'Building_State', 
    displayName: "State"
  }, 
  { 
    field: 'Building_Name', 
    displayName: "Name"
  }, 
  { 
    field: 'Building_ContactPerson', 
    displayName: "ContactPerson"
  }, 
  { 
    field: 'Building_ContactNumber', 
    displayName: "ContactNumber"
  }];
  
  $scope.BuildingGridOptions = {
    enableSorting: true,
    columnDefs: $scope.BuildingColumns,
    onRegisterApi: function(gridApi) {
      $scope.gridApi = gridApi;
    }
  };
});

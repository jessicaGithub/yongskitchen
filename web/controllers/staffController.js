
/**
 * Controls the staff pages
 */
app.controller('StaffHomeCtrl', function ($scope, $location, $http) {
  console.log("Staff Home Controller reporting for duty.");

  $scope.buildings = [];

  $http.get('../Dummy_Data/buildings.csv').success(function(data) {
     $scope.BuildingData = csvJSON(data);

    angular.forEach($scope.BuildingData, function(value, key) {
        // console.log(value.Building_Name);
        $scope.buildings.push(value.Building_Name + " at " + value.Building_Address);
    });

     $scope.selectedBuilding = $scope.buildings[0];

  });

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

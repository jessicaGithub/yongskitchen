app.controller('AdminManageStaffCtrl', function ($scope, $location, $http) {
  console.log("Admin Manage Staff Controller reporting for duty.");

  $scope.durationOptions = ["Today", "This Week", "This Month", "This Year", "This Financial Year"];
  $scope.selectedDuration = "Today";

  $http.get('../Dummy_Data/staffs.csv').success(function(data) {
     $scope.StaffData = csvJSON(data);

     $scope.StaffGridOptions.data = $scope.StaffData;
  });

  $scope.StaffColumns = [{ 
    field: 'Staff_ID', 
    displayName: "ID"
  }, 
  { 
    field: 'Staff_FirstName', 
    displayName: "First Name"
  }, 
  { 
    field: 'Staff_LastName', 
    displayName: "Last Name"
  }, 
  { 
    field: 'Staff_Username', 
    displayName: "Username"
  }, 
  { 
    field: 'Staff_IDType', 
    displayName: "ID Type"
  }, 
  { 
    field: 'Staff_IDNumber', 
    displayName: "ID Number"
  }, 
  { 
    field: 'Staff_Type', 
    displayName: "Type"
  }, 
  { 
    field: 'Staff_Mobile', 
    displayName: "Mobile"
  }, 
  { 
    field: 'Staff_Password', 
    displayName: "Password"
  }];
  
  $scope.StaffGridOptions = {
    enableSorting: true,
    columnDefs: $scope.StaffColumns,
    onRegisterApi: function(gridApi) {
      $scope.gridApi = gridApi;
    }
  };
});

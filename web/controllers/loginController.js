
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
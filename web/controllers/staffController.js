
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

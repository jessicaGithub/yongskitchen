app.controller('StaffAddOrderCtrl', function ($scope, $location, $http) {
  console.log("Staff Add Order Controller reporting for duty.");

  // staff order page tab fix
  $('.nav-tabs a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
  });

  $http.get('../Dummy_Data/today_menu.csv').success(function(data) {
     $scope.todayMenuList = csvJSON(data);

     $scope.breakfastList = [], $scope.lunchList = [] , $scope.drinksList = [];

     angular.forEach($scope.todayMenuList, function(value, key) {
        // console.log(value);
        switch(value.MenuItem_Category) {
          case "Breakfast":
            $scope.breakfastList.push(value);
            break;
          case "Lunch":
            $scope.lunchList.push(value);
            break;
          case "Drink":
            $scope.drinksList.push(value);
            break;
          default:
            break;

        }
    });

  });


});

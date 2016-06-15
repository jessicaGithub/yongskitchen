
/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // pages for all users
    .when("/", {templateUrl: "partials/login.html", controller: "LoginCtrl"})    
    // .when("/my-account", {templateUrl: "partials/my-account.html", controller: "PageCtrl"})
    // Pages for admin    
    .when("/admin-home/edit-today", {templateUrl: "partials/admin-home-edit.html", controller: "AdminHomeCtrl"})
    .when("/admin-home/view-today", {templateUrl: "partials/admin-home-view.html", controller: "AdminHomeCtrl"})
    .when("/admin/summary", {templateUrl: "partials/admin-summary.html", controller: "AdminSummaryCtrl"})
    // .when("/admin/invoice-generator", {templateUrl: "partials/admin-invoice-generator.html", controller: "AdminCtrl"})
    .when("/admin/manage-staff", {templateUrl: "partials/admin-manage-staff.html", controller: "AdminManageStaffCtrl"})
    .when("/admin/manage-order", {templateUrl: "partials/admin-manage-order.html", controller: "AdminManageOrderCtrl"})
    .when("/admin/manage-client", {templateUrl: "partials/admin-manage-client.html", controller: "AdminManageClientCtrl"})
    .when("/admin/manage-building", {templateUrl: "partials/admin-manage-building.html", controller: "AdminManageBuildingCtrl"})
    .when("/admin/manage-menu-item", {templateUrl: "partials/admin-manage-menu-item.html", controller: "AdminManageMenuItemCtrl"})
    // pages for staff    
    .when("/staff-home", {templateUrl: "partials/staff-home.html", controller: "StaffCtrl"})
    .when("/staff/add-order", {templateUrl: "partials/staff-add-order.html", controller: "StaffCtrl"})
    // // else 404
    // .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);
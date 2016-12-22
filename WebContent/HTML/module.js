var empApp = angular.module("empApp", ['ui.router']);

empApp.config(function ($stateProvider,$urlRouterProvider) {

     
   /*  $stateProvider.state.go("View.Edit",{selectEmploy:angular.Json(selectEmploy)});
 */
     
     $urlRouterProvider.otherwise("/Home");
     $stateProvider
     
        .state("Home", {
            url: "/home",
            templateUrl: "Home.html",
            controller:"homeController"
        })
        .state("View", {
            url:"/View",
            templateUrl: "employee_view.html",
            controller:"viewController"
        })
        
        .state("View.Edit", {
            url:"/Edit",
            templateUrl: "employee_edit.html",
            controller:"editController",
            params:{selectemploy:null}
                
        })
        .state("Add", {
            url:"/Add",
            templateUrl: "employee_add.html",
            controller:"addController"
        });
   });
/*var empApp=angular.module('empApp',['ngRoute']);

empApp.config(function($routeProvider) {
	   
	$routeProvider
		
	   .when('/View', {
        templateUrl : 'employee_view.html',
        controller  : 'viewController'
	    })
        .when('/View.Edit', {
            templateUrl : 'employee_edit.html',
            controller  : 'editController'
        })
        .otherwise({
            redirectTo:'/home.html'
        })
        
      
});
*/

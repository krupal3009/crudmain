var myApp=angular.module("myApp",[]);
myApp.controller("myCtrl",['$scope','myProvider',function($scope,myProvider){
	$scope.valueA=0;
	$scope.valueB=0;
	
	
	$scope.doSum=function(){
		$scope.sum=myProvider.doSum($scope.valueA,$scope.valueB);
	};
	
}]);


myApp.provider("myProvider",function(){

	this.$get=function(){
		function doSum (a,b){
			return parseInt(a)+parseInt(b);
		};
	}
});

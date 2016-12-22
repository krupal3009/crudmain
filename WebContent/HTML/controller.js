/*empApp.controller('homeController',['$scope','DataService',function($scope,DataService) {
	
	$scope.employees=[];
    
    $scope.employees=DataService.initialData();
  
	console.log($scope.employees);
	  	
}]);
*/
empApp.controller('viewController',['$scope','$state','DataService','DOBFactory','$location',function($scope,$state,DataService,DOBFactory,$location) {
	$scope.searchText="";
  	$scope.exactSearch=false;
    $scope.employees={};
    var tempEmployee="";
	  
	/*  	DataService.getArray().then(function(resp){
	  		$scope.employees=resp;
	  	});
	*/  	
    var promise=DataService.getArray();
    console.log(promise);
    		promise.then(function(data){
    			$scope.employees=data;
    		})
  	
  	$scope.orderByField=function(x){
    		$scope.myField=x;
    };
  	    
    $scope.searchOn=function(item){
    	if($scope.searchText==undefined){
    		return true;
    		
    	}
    	else{
  	    	if (item.fname.toLowerCase().indexOf($scope.searchText.toLowerCase()) !=-1){
  	    		return true;
  	    	}
    	}
    		return false;
    };
    
    $scope.getAge=function(user){
 		return DOBFactory.getAge(user);
 	}
   
    $scope.passParam=function(user){
    	$state.go('View.Edit',{selectemploy:user});
    	tempEmployee=angular.copy($scope.employees);
    	
    	
    }
 
  	
		$scope.editCancel=function(){
			$scope.employees=angular.copy(tempEmployee);
		 	$state.go('View.Edit',{selectemploy:null});
		    		return true;
		}
  
    $scope.indelete = function (id) {
    	  $scope.employees.splice(id,1);
          DataService.setArray($scope.employees);
    };
 

    
 }]);

empApp.controller('editController',['$scope','$stateParams','DataService',function($scope,$stateParams,DataService) {
	
	
	$scope.selectedEmployee1=$stateParams.selectemploy;
	
}]);

empApp.controller('addController',['$scope','$filter','DataService',function($scope,$filter,DataService) {

		$scope.fname="";
		$scope.mname="";
		$scope.lname="";
		$scope.dob="";
		$scope.employees=[];
	
	   	var promise=DataService.getArray();
		promise.then(function(data){
			$scope.employees=data;
		})
	/*
		$scope.employees=DataService.getArray();
	*/	
		
			 var orderBy = $filter('orderBy');
			
			$scope.order = function () {
			    var a=0;
			    if($scope.employees.length<=0){
			    	a=1;
			    }
			    else{
			        tempEmployees= orderBy($scope.employees, 'id');	
					a=(tempEmployees[tempEmployees.length-1].id)+1;
			    }
			    
			   return a;
			  };
			  
		
		$scope.addsave= function () 
		{
			
			var newId = $scope.order();
		
				var addEmployee={id:newId, 
					fname:$scope.fname,
					mname:$scope.mname,
					lname:$scope.lname,
					dob:$scope.dob
				};
				
	
			 	$scope.employees.push(addEmployee);
			 	DataService.setArray($scope.employees);
			 	$scope.addcancel();
		}
		$scope.addcancel= function () 
		{
			$scope.fname="";
			$scope.mname="";
			$scope.lname="";
			$scope.dob="";
				
			
		}
		        
	}]);

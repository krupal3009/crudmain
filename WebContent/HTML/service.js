/*empApp.service('DataService',function($http,$q){
   var contacts=[];
   var deferred=$q.defer();
   $http.get("employees.json").then(function(resp){
	   	deferred.resolve(resp.data.employees);
   });
   
  
  		
   this.initialData=function(){
   $http({
	   		method:'GET',
	   		url:'employees.json'
	   	})
	   		.success(function(resp){
	   			deferred.resolve(resp.employees);
	   			return true;
	    });
   		
   };
  
   		
   this.getArray=function(){
		contacts=deferred.promise;
		return contacts;
	}; 	   
	    this.getArray = function () {
	    	this.defineArray();
	     	return deferred.promise;
	    }
	    
	    this.setArray = function (obj) {
	        contacts=obj;
	    };
	 	
});
*/
empApp.factory('DataService',function($http,$q){

	var factory={};   
	var contacts=[];
	   var deferred=$q.defer();
	   $http.get("employees.json").then(function(resp){
		   	deferred.resolve(resp.data.employees);
		 });
	  
    factory.getArray=function(){
    	contacts=deferred.promise;
    	
		return contacts;
		
	}; 	   
    factory.setArray = function (obj) {
    	contacts=obj;
    };
 	return factory;

});


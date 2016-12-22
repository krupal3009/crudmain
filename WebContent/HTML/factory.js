empApp.factory('FirstFactory', function ($http) {
	
	
	
    var factory = {}; // define factory object

    /*var jsonData = $http.get('employees.json').success(function(response) {
        return response.data;
    });

    factory.getData= function() { // define method on factory object

        return jsonData; // returning data that was pulled in $http call

    };
*/    

    factory.getId="";
    factory.getFname="";
    factory.getMname="";
    factory.getLname="";
    factory.getDOB="";
	
	
    

    return factory; // returning factory to make it ready to be pulled by the controller

});
		
empApp.factory('DOBFactory', function () {
	return {
			getAge:function(birth) {
				 	var today = new Date();
				    var birthDate = new Date( birth);
				    var age = today.getFullYear() - birthDate.getFullYear();
				    var m = today.getMonth() - birthDate.getMonth();
				    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
				        age--;
				    }
				    return age;
				
				}
	}
	
});

